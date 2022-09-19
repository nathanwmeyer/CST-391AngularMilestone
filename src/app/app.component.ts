import { Component } from '@angular/core';
import { Router } from '@angular/router';
/**
 * AppComponent:
 * The main app component and handles all common parts of the application
 *
 * @export
 * @class AppComponent
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CST 391: Angular Milestone';

/**
 * displayProducts:
 * Navigates to '/list-products/' with a Date parameter attached
 *
 * @memberof AppComponent
 */
public displayProducts(){
    this.router.navigate(['list-products'], { queryParams: { data: new Date()} });
  }
/**
 * Creates an instance of AppComponent.
 * @param {Router} router
 * @memberof AppComponent
 */
constructor(private router: Router) {}
}
