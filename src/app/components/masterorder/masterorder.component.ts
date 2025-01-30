import { Component, Output } from '@angular/core';
import { CategoryList } from '../Models/category-list';
import { ORDERComponent } from '../order/order.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-masterorder',
  imports: [ORDERComponent, FormsModule],
  templateUrl: './masterorder.component.html',
  styleUrl: './masterorder.component.css'
})
export class MasterorderComponent {
  SelectedCatID: number;
  catList: CategoryList[];
  Price: number;
  public TotalPrice: number = 0

  constructor() {
    this.Price = 0
    this.SelectedCatID = 0;
    this.catList = [
      {
        id: 1, name: 'beauty'
      },
      {
        id: 2, name: "fragrances"
      }
    ]
  }


  getTotalPrice(total: number) {
    this.TotalPrice = total;
  }

}
