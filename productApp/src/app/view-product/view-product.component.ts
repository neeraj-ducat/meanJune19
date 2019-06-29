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
  }

  remove(p: Product) {
    this.productSvc.remove(p);
    this.alertService.success('Successfully removed.');
  }
  edit(p: Product) {
    this.productSvc.edit(p);
  }
}
