import { Component, Input, OnInit} from '@angular/core';
import { Orders } from '../../../data/order';
import { CommonModule } from '@angular/common';
import { SharedService } from '../sharedService';

@Component({
  selector: 'table-app',
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrl: '../../app.css'
})


export class Table implements OnInit {
    orderList = Orders
    selectedPayment: string = '';
    selectedProduct: string = '';
    filteredList: any;
    editProductDetails: any;

    productListOption = ['Coffee', 'Soda', 'Bread'];
    payMethodOption = ['Cash', 'G-Cash', 'Bank Transfer'];

    constructor(public sharedservice: SharedService){}

    //set a default value of action before doing something or loading somehthiong
    ngOnInit()  {
      console.log(this.orderList);
      this.filteredList = this.orderList
        // this.printSelectedPayMet();
    }

    fetchProductForEdit(id: number, product: string, name: string, amount: string, paymet: string){
      this.editProductDetails = {id, product, name, amount, paymet};
      console.log("Fetching Edit Details: ", this.editProductDetails);

      this.sharedservice.setShowModalWithEditProduct(true, {id, product, name, amount, paymet})
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


