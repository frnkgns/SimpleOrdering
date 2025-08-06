import { Component } from '@angular/core';
import { Table } from './component/table/table';
import { ButtonModule } from 'primeng/button';
import { ProductList } from './component/productList/product';
import { SharedService } from './component/sharedService';
import { TakeOrder } from './component/modal/takeOrder';

@Component({
  selector: 'app-root',
  imports: [Table, ButtonModule, ProductList, TakeOrder],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor(public sharedservice: SharedService) {}

  handleOpenTakeOrderModal() {
    this.sharedservice.setShowTakeOrderModal(true);
  }

}
