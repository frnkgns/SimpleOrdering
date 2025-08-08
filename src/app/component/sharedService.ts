// shared.service.ts
import { Component, EventEmitter, Injectable, Input, Output } from '@angular/core';
import { Orders } from '../../data/order';

@Injectable({
  providedIn: 'root',
})

export class SharedService {
  showTakeOrderModal = false;
  selectedProduct = '';
  editProductDetails: any;
  action: any;

  saveOrder(product: string, name: string, amount: number, payMet: string) {
    const id = Orders.length + 1;

    Orders.push({id, product, name, amount, payMet});
    console.log("Orders After: ", Orders);

    this.setShowTakeOrderModal(false);
  }

  saveEditOrder(id: number, product: string, name: string, amount: number, payMet: string){
    Orders[id-1] = {id, product, name, amount, payMet};
    console.log("Data after Edit", Orders);

    this.showTakeOrderModal = false;
  }

  deleteOrder(id: number){
    Orders.splice(id, 1);

    console.log("Orders After Delete: ", Orders);
  }

  setShowModalWithProduct(value: boolean, product: string) {
    this.showTakeOrderModal = value;
    this.selectedProduct = product;
    this.action = "new";

    console.log("Received From Constructor: ", this.selectedProduct);
  }

  setShowModalWithEditProduct(value: boolean, details: any){
    this.showTakeOrderModal = value;
    this.editProductDetails = details;
    this.action = "edit";

    console.log("Receive Edit in Shared: ", this.editProductDetails);
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
