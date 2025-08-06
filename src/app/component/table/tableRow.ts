import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'table-app-row',
  imports: [CommonModule],
  templateUrl: './tableRow.html',
  styleUrl: '../../app.css'
})
export class TableRow {


    @Input ({required: true}) orderrows!: {
        id: number,
        product: string,
        name: string,
        amount: number,
        payMet: string
    };
}


