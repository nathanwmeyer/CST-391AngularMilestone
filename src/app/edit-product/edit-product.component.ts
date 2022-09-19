import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/Product';
import { ProductServiceService } from '../service/product-service.service';
/**
 * EditProductComponent:
 * This module is used for editing products, this module uses a form and edits products using the information in the form
 *
 * @export
 * @class EditProductComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  appForm: FormGroup;
  product: any = new Product(this.service.getProducts.length, '', '', 0,0);
/**
 * Creates an instance of EditProductComponent.
 * @param {ProductServiceService} service
 * @param {Router} router
 * @param {ActivatedRoute} route
 * @memberof EditProductComponent
 */
  constructor(private service: ProductServiceService, private router: Router, private route: ActivatedRoute) {
    this.appForm = new FormGroup ({
      name: new FormControl(''),
      type: new FormControl(''),
      shelflife: new FormControl(''),
      price: new FormControl('')
    })
   }
/**
 * ngOnInit:
 * used for events that should happen during initialization.
 * calls the productServiceService.getProduct method and places the found product information into the form.
 *
 * @memberof EditProductComponent
 */
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.product = this.service.getProduct(params['id'], (product: Product) =>{
        this.product = product;
      })
    })
  }
/**
 * onSubmit:
 * takes the data from the form and converts it into a new product with the id of the product that needs to be edited. Then the
 * productService.updateProduct is called and updates the product.
 *
 * @param {*} data
 * @memberof EditProductComponent
 */
  onSubmit(data: any): void {
    console.log(data.shelflife);
    this.product = new Product(this.product.id, data.name, data.type, data.shelflife, data.price);
    this.service.updateProduct(this.product, () => {
      this.service.updateProduct;
    })
    this.router.navigate(['list-products'], { queryParams: { data: new Date()} });
  }

}
