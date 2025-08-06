import { Component, Input } from '@angular/core';
import { SharedService } from '../sharedService';
import { FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-takeorder',
  templateUrl: './takeOrder.html',
  styleUrl: '../../app.css',
  imports: [ReactiveFormsModule]
})

export class TakeOrder {
  constructor(public sharedservice: SharedService) {}

  // so this is how the initialization of Form
  orderForm = new FormGroup({
    name: new FormControl(''),
    amount: new FormControl(0),
    paymet: new FormControl(''),
  })

  getData(){
    const formData = this.orderForm.value;
    console.log("Form Data: ", formData )
    console.log('Fetched Product: ', this.sharedservice.selectedProduct);
    this.savedOrder(this.sharedservice.selectedProduct, formData.name!, formData.amount!, formData.paymet!)
  }

  savedOrder(product: string, name: string, amount:number, paymet: string) {
    this.sharedservice.saveOrder(product, name, amount, paymet);
  }

  handleCloseTakeOrderModal() {
    this.sharedservice.setShowTakeOrderModal(false);
  }
  
}
