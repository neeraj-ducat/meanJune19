import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  constructor(private productSvc: ProductService) { }

  ngOnInit() {
  }

  remove(p: Product) {
    this.productSvc.remove(p);
  }
  edit(p: Product) {
    this.productSvc.edit(p);
  }
}
