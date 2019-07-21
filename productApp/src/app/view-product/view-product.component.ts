import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  constructor(private productSvc: ProductService,
    private alertService: AlertService) { }

  ngOnInit() {

    console.log('loading products...');
    this.productSvc.fetch()
      .subscribe(result => {
          this.productSvc.products = result;
          console.log('Following products are loaded: ',result);
         
          this.productSvc.syncProducts();
    });
  }

  remove(p: Product) {
    this.productSvc.remove(p).subscribe(res => {
      this.alertService.success('successfully removed.');
      // product is removed from the service arrat.
      this.productSvc.products.splice(this.productSvc.products.indexOf(p),1);
      this.productSvc.syncProducts();
    });
    
  }
  edit(p: Product) {
    this.productSvc.edit(p);
  }
}
