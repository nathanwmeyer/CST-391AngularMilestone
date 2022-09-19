import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../models/Product';
import { ProductServiceService } from '../service/product-service.service';
/**
 * CreateProductComponent
 * This module is used for creating new products, this module uses a form and creates a new product using the information in the form
 *
 * @export
 * @class CreateProductComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  appForm: FormGroup;
  product: any = new Product(this.service.getProducts.length, '', '', 0,0);

/**
 * Creates an instance of CreateProductComponent.
 * @param {ProductServiceService} service
 * @param {Router} router
 * @memberof CreateProductComponent
 */
  constructor(private service: ProductServiceService, private router: Router) {
    this.appForm = new FormGroup ({
      name: new FormControl(''),
      type: new FormControl(''),
      shelflife: new FormControl(''),
      price: new FormControl('')
    })
   }
/**
 * ngOnInit:
 * used for events that should happen during initialization
 *
 * @memberof CreateProductComponent
 */
  ngOnInit(): void {
  }
/**
 * onSubmit:
 * takes all of the data in the form and converts it into a new Product, calling the product-service.createProduct method to create the product
 *
 * @param {*} data
 * @memberof CreateProductComponent
 */
  onSubmit(data:any): void {
    console.log(data.shelflife);
    this.service.createProduct(new Product(this.service.getProducts.length, data.name, data.type, data.shelflife, data.price), this.service.createProduct);
    this.router.navigate(['list-products'], { queryParams: { data: new Date()} })
  }

}
