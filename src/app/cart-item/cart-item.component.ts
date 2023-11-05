import { Component, EventEmitter, Input, Output } from '@angular/core';
interface Book{
  "ISBN":number;
  "title":string;
  "author":string;
  "summary":string;
  "image":string;
  "price":{
    "currency":string;
    "value":number;
    "displayValue":string
  };
}
interface CartItem{
  bookData: Book;
  "count": number;
}
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() item: CartItem |undefined;
  @Output() removeFromCart: EventEmitter<number> = new EventEmitter();
  @Output() addItem: EventEmitter<number>=new EventEmitter();
  @Output() deleteItem: EventEmitter<number>=new EventEmitter();
  removeBook(id:number){
    this.removeFromCart.emit(id);
  }
  plus(id:number){
    this.addItem.emit(id);
  }
  minus(id:number){
    this.deleteItem.emit(id);
  }
}
