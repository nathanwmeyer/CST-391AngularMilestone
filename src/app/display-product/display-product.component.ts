import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
/**
 * DisplayProductComponent:
 * This module displays a specific product passed in by the ListProductComponent
 *
 * @export
 * @class DisplayProductComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent implements OnInit {
/**
 * Creates an instance of DisplayProductComponent.
 * @param {Router} router
 * @memberof DisplayProductComponent
 */
  constructor(private router: Router) { }
  @Input() product: any;

  /**
   * ngOnInit:
   * used for events that should happen during initialization
   *
   * @memberof DisplayProductComponent
   */
  ngOnInit(): void {
  }
/**
 * back:
 * reroutes to the list-products module with a data parameter attached.
 *
 * @memberof DisplayProductComponent
 */
  public back(){
    this.router.navigate(['list-products'], { queryParams: { data: new Date()} });
  }

}
