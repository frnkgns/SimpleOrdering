// shared.service.ts
import { Injectable, Input } from '@angular/core';
import { Orders } from '../../data/order';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  showTakeOrderModal = false;
  selectedProduct = '';

  saveOrder(product: string, name: string, amount: number, payMet: string) {
    const id = Orders.length + 1;

    Orders.push({id, product, name, amount, payMet});
    console.log("Orders After: ", Orders);

    this.setShowTakeOrderModal(false);
  }

  deleteOrder(id: number){
    Orders.splice(id, 1);

    console.log("Orders After Delete: ", Orders);
  }

  setShowModalWithProduct(value: boolean, product: string) {
    this.showTakeOrderModal = value;
    this.selectedProduct = product;

    console.log("Received From Constructor: ", this.selectedProduct);
  }

  setShowTakeOrderModal(value: boolean) {
    this.showTakeOrderModal = value;
  }

  getShowTakeOrderModal() {
    return this.showTakeOrderModal;
  }
}   

//so since nag hahanap nga tayo ng way to create a global variable where in we can
//access and mofidy the value of a certain variable we use a shared services by
// by importing thr injectable decorator from angular core
