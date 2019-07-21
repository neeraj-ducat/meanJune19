import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  // object to receive form data
  product: Product;
  constructor(private productSvc: ProductService,
    private alertService: AlertService,
    private router: Router) {
    if (productSvc.editIndex == -1)
        this.product = new Product();
    else
        this.product = Object.assign({},productSvc.products[productSvc.editIndex]);  

   }

  ngOnInit() {
  }

  saveProduct() {
    console.log('Saving...');
    // A copy of the product object is created
    const toBeAdded = Object.assign({}, this.product);
    this.productSvc.add(toBeAdded).subscribe(result => {
      console.log(result);
      // alert message is displayed.
      this.alertService.success('successfully saved.');
      this.productSvc.syncProducts();
      this.clearForm();
    });
   
  }
  clearForm() {
    this.product.name ='';
    this.product.brand ='';
    this.product.price = 0;
  }
  update() {
    const toBeUpdated = Object.assign({}, this.product);
    this.productSvc.update(toBeUpdated).subscribe(result => {
      this.clearForm();
      this.alertService.success('successfully updated.');
      this.productSvc.syncProducts();
      // route is changed to the view component.
      this.router.navigate(['view']); 
    });
    
  }
}
