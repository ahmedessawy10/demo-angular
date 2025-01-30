import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ProductList } from '../Models/product-list';


@Component({
  selector: 'app-buy',
  imports: [],
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.css'
})
export class BuyComponent {
  @Input() public p: ProductList = {} as ProductList;
  @Output() public BuyProductsEvent = new EventEmitter<{ price: number, product: ProductList, count: number }>();

  public TotalPrice: number = 0;


  add(countInp: any) {
    if (countInp.value < +countInp.max) {
      countInp.value++;
    }

  }
  sub(countInp: any) {
    if (countInp.value > +countInp.min) {
      countInp.value--;
    }

  }

  BuyProducts(count: any) {
    let price: number = this.p.price * count;
    this.p.stock = this.p.stock - count;
    this.BuyProductsEvent.emit({ price: price, product: this.p, count: count });
  }
  // ngOnChanges():void {
  //   this.BuyProducts();
  // }
}
