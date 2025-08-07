import { Component, inject } from '@angular/core';
import { Table } from './component/table/table';
import { ButtonModule } from 'primeng/button';
import { ProductList } from './component/productList/product';
import { TakeOrder } from './component/modal/takeOrder';
import { SharedService } from './component/sharedService';

@Component({
  selector: 'app-root',
  imports: [Table, ButtonModule, ProductList, TakeOrder],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  details = "sample";

  constructor(public sharedservice: SharedService){}
}
