import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../service/product-service.service';
/**
 * DeleteProductComponent:
 * This module removes a product from the REST API by using the product-service service and an id passed in as a parameter.
 *
 * @export
 * @class DeleteProductComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  /**
   * Creates an instance of DeleteProductComponent.
   * @param {ProductServiceService} service
   * @param {ActivatedRoute} router
   * @memberof DeleteProductComponent
   */
  constructor(private service: ProductServiceService, private router: ActivatedRoute) { }

  /**
   * ngOnInit:
   * calls the product-service service to remove the product from the REST API using its id passed in as a parameter
   *
   * @memberof DeleteProductComponent
   */
  ngOnInit(): void {
    this.router.params.subscribe( params => {
      this.service.deleteProduct(params['id'], () => {
        this.service.deleteProduct;
      })
      console.log("Removing Product with id of " + params['id']);
    })
  }

}
