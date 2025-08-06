// shared.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  showTakeOrderModal = false;

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
