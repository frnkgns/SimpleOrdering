import { Component, Input, OnInit} from '@angular/core';
import { Orders } from '../../../data/order';
import { CommonModule } from '@angular/common';
import { TableRow } from './tableRow';

@Component({
  selector: 'table-app',
  imports: [CommonModule, TableRow],
  templateUrl: './table.html',
  styleUrl: '../../app.css'
})


export class Table implements OnInit {
    orderList = Orders
    selectedPayment: string = '';
    selectedProduct: string = '';
    filteredList: any;

    productListOption = ['Coffee', 'Soda', 'Bread'];
    payMethodOption = ['Cash', 'G-Cash', 'Bank Transfer'];

    //set a default value of action before doing something or loading somehthiong
    ngOnInit()  {
      console.log(this.orderList);
      this.filteredList = this.orderList
        // this.printSelectedPayMet();

    }

    selectedPaymentMethod(event?: any){
      const selectedPM = event.target.value;
      this.selectedPayment = selectedPM;
      console.log(selectedPM);
      console.log(this.orderList);
      console.log(this.selectedPayment);

      if(selectedPM == "Payment Method"){
        this.filteredList = this.orderList
      } else {
       this.filteredList = this.orderList.filter((orderList) => orderList.payMet === this.selectedPayment);
      }

      
      console.log(this.filteredList);
    }

    selectedProductFunct(event?: any){
      const selectedP = event.target.value;
      this.selectedProduct = selectedP;
      console.log(selectedP);
      console.log(this.orderList);
      console.log(this.selectedProduct);

      if(selectedP == "Product"){
        this.filteredList = this.orderList
      } else {
       this.filteredList = this.orderList.filter((orderList) => orderList.product === this.selectedProduct);
      }

      
      console.log(this.filteredList);
    }
}


