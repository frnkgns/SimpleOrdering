import { Component, Output } from '@angular/core';
import { Products } from '../../../data/productlist';
import { TakeOrder } from "../modal/takeOrder";
import { SharedService } from '../sharedService';


@Component({
  selector: 'app-products',
  templateUrl: './product.html',
  styleUrl: '../../app.css',
  imports: [TakeOrder]
})
export class ProductList {
    products = Products
    constructor(public sharedservice: SharedService) {}

  handleOpenTakeOrderModal() {
    this.sharedservice.setShowTakeOrderModal(true);
  }


}
