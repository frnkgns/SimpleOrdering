import { Component, Input } from '@angular/core';
import { SharedService } from '../sharedService';

@Component({
  selector: 'app-takeorder',
  templateUrl: './takeOrder.html',
  styleUrl: '../../app.css'
})
export class TakeOrder {

  //basically parang json type param inshort object 
  @Input() order!: {
    id: number,
    product: string,
    name: string,
    amount: number,
    payMet: string
  };

  constructor(public sharedservice: SharedService) {}

  handleCloseTakeOrderModal() {
    this.sharedservice.setShowTakeOrderModal(false);
  }

}
