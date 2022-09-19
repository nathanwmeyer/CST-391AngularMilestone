import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/Product';
import { ProductServiceService } from '../service/product-service.service';
/**
 * ListProductComponent:
 * This module shows a list of all products, showing the user specific products through the Display Component if they click on a product
 *
 * @export
 * @class ListProductsComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  selectedProduct: any;
  products: Product[] = [];
/**
 * Creates an instance of ListProductsComponent.
 * @param {ActivatedRoute} route
 * @param {ProductServiceService} service
 * @memberof ListProductsComponent
 */
  constructor(private route: ActivatedRoute, private service: ProductServiceService) { }

/**
 * ngOnInit:
 * retrieves a list of products using the Product Service
 *
 * @memberof ListProductsComponent
 */
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.service.getProducts( (products:Product[]) =>
      {
        this.products = products;
        this.selectedProduct = null;
      })
    })
  }
/**
 * onSelectProduct:
 * When an entry in the list is clicked, the associated product is selected and passed on to the Display Component
 *
 * @param {Product} product
 * @memberof ListProductsComponent
 */
  public onSelectProduct(product: Product){
    this.selectedProduct = product;
  }

}
