import { Component } from '@angular/core';
import { Products } from '../../../data/productlist';
import { TakeOrder } from '../modal/takeOrder';


@Component({
  selector: 'app-products',
  templateUrl: './product.html',
  imports: [TakeOrder],
  styleUrl: '../../app.css'
})
export class ProductList {
    products = Products
    showOrderModal = false;

}
