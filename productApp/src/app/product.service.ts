import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Router } from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // Array to Products to share products b/w new and view components
  products: Product[];

  // variable to store the index of the product to be edited.
  editIndex: number = -1;
  // a counter variable to generate unique id for each product
  counter: number = 0;
  constructor(private router: Router,
    private localStorage: LocalStorageService,
    
  private http: HttpClient) { 
      this.products = Array();
  }

  syncProducts()
  {
    this.localStorage.store('products',this.products);
  }
  fetch() :Observable <Product[]>
  {
  return this.http.get<Product[]>(environment.api_url);  
  }
  add(p: Product) :Observable <string>
  {
  return this.http.post<string>(environment.api_url,p);  
  }
  remove(p: Product):Observable <string> {
    let url = environment.api_url+"/"+p._id;
    return this.http.delete<string>(url);  
 
  }
  edit(p: Product) {
    // index of the product to be updated is obtained
    this.editIndex = this.products.indexOf(p);
    // route is changed to the new component.
    this.router.navigate(['new']); 
   }
   update(p: Product) :Observable <string>{
    return this.http.put<string>(environment.api_url,p);  
  }
}
