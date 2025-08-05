import { Component } from '@angular/core';
import { Table } from './component/table/table';
import { ButtonModule } from 'primeng/button';
import { ProductList } from './component/productList/product';


@Component({
  selector: 'app-root',
  imports: [Table, ButtonModule, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
