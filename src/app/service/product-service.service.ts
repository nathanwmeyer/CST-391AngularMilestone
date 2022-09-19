import { HttpClient } from '@angular/common/http';
import { APP_BOOTSTRAP_LISTENER, Injectable } from '@angular/core';
import { Product } from '../models/Product';

/**
 * ProductServiceService:
 * The main data retrieval service for the application. Communicates with the Express REST API
 *
 * @export
 * @class ProductServiceService
 */
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  hostname: string = "https://gcucst391express.azurewebsites.net";

  products: Product[] = [];

/**
 * Creates an instance of ProductServiceService.
 * @param {HttpClient} http
 * @memberof ProductServiceService
 */
constructor(private http: HttpClient) { }

/**
 * getProducts:
 * retrieves a list of products from the REST API
 *
 * @param {*} callback
 * @memberof ProductServiceService
 */
public getProducts(callback:any) {
    this.http.get<Product[]>(this.hostname + "/products").subscribe((data) =>
    {
      let products:Product[] = [];
      for(let x=0; x < data.length; ++x)
      {
        products.push(new Product(data[x]['id'], data[x]['name'], data[x]['type'], data[x]['shelflife'], data[x]['price']));
      }
      callback(products);
    })
  }
/**
 * getProduct:
 * Retrieves a specific product from the REST API using an id.
 *
 * @param {number} id
 * @param {*} callback
 * @memberof ProductServiceService
 */
public getProduct(id:number, callback:any) {
    this.http.get<Product>(this.hostname + "/products/" + id).subscribe((data) =>
    {
      let product:Product = new Product(data['id'], data['name'], data['type'], data['shelflife'], data['price']);
      callback(product);
    })
  }
/**
 * createProduct:
 * Uses the REST API to create a new product
 *
 * @param {Product} product
 * @param {*} callback
 * @memberof ProductServiceService
 */
public createProduct(product:Product, callback:any) {
    this.http.post<Product>(this.hostname + "/products", product).subscribe((data) => {
      callback(data);
    })
  }
/**
 * updateProduct:
 * Uses the REST API to update a product
 *
 * @param {Product} product
 * @param {*} callback
 * @memberof ProductServiceService
 */
public updateProduct(product:Product, callback:any) {
    this.http.put<Product>(this.hostname + "/products/" + product.Id, product).subscribe((data) => {
      callback(data);
    })
  }
/**
 * deleteProduct:
 * removes a product from the REST API by using an id
 *
 * @param {number} id
 * @param {*} callback
 * @memberof ProductServiceService
 */
public deleteProduct(id: number, callback:any) {
    console.log(id);
    this.http.delete<Product>(this.hostname + "/products/" + id).subscribe((data) => {
      console.log(data);
      callback(data);
    })
  }
}
