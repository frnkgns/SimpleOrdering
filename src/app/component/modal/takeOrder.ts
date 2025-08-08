import { Component, inject } from '@angular/core';
import { SharedService } from '../sharedService';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-takeorder',
  templateUrl: './takeOrder.html',
  styleUrl: '../../app.css',
  imports: [ReactiveFormsModule]
})

export class TakeOrder {
  constructor(public sharedservice: SharedService) {}
  editThisProduct = inject(SharedService).editProductDetails;
  action = inject(SharedService).action;
  selectedProduct = this.editThisProduct ? this.editThisProduct.product : inject(SharedService).selectedProduct;

  // so this is how the initialization of Form
  orderForm = this.action == "edit" ? 
  new FormGroup({
    name: new FormControl(this.editThisProduct ? this.editThisProduct.name : ''),
    amount: new FormControl(this.editThisProduct ? this.editThisProduct.amount : ''),
    paymet: new FormControl(this.editThisProduct ? this.editThisProduct.paymet : '')
  }) :
  new FormGroup({
    name: new FormControl(''),
    amount: new FormControl(''),
    paymet: new FormControl('')
  })

  getData(){
    const formData = this.orderForm.value;
    console.log("Form Data: ", formData )
    console.log('Fetched Product: ', this.sharedservice.selectedProduct);

    this.action == "new" ? 
    this.savedOrder(this.sharedservice.selectedProduct, formData.name!, formData.amount!, formData.paymet!) :
    this.saveEditOrder(this.editThisProduct.id , this.editThisProduct.product, formData.name!, formData.amount!, formData.paymet!)

  }

  savedOrder(product: string, name: string, amount:number, paymet: string) {
    this.sharedservice.saveOrder(product, name, amount, paymet);
  }

  saveEditOrder(id:number, product: string, name: string, amount:number, paymet: string) {
    this.sharedservice.saveEditOrder(id, product, name, amount, paymet);
  }

  handleCloseTakeOrderModal() {
    this.sharedservice.setShowTakeOrderModal(false);
  }
  
}
