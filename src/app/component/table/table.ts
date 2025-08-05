import { Component, signal } from '@angular/core';
import { Orders } from '../../../data/order';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'table-app',
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrl: '../../app.css'
})
export class Table {
    orderList = Orders
}


