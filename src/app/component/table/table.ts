import { Component} from '@angular/core';
import { Orders } from '../../../data/order';
import { CommonModule } from '@angular/common';
import { TableRow } from './tableRow';

@Component({
  selector: 'table-app',
  imports: [CommonModule, TableRow],
  templateUrl: './table.html',
  styleUrl: '../../app.css'
})
export class Table {
    orderList = Orders
}


