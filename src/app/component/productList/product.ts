import { Component, Output } from '@angular/core';
import { Products } from '../../../data/productlist';
import { SharedService } from '../sharedService';


@Component({
  selector: 'app-products',
  templateUrl: './product.html',
  styleUrl: '../../app.css',
})
export class ProductList {
    products = Products

  constructor(public sharedservice: SharedService) {}

  openOrderForm(product: string) {
    console.log("Fetch Item to Modal: ", product);
    this.sharedservice.setShowModalWithProduct(true, product);
  }
}
