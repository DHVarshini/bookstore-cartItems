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
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() book: Book|undefined;
  @Output() addBook: EventEmitter<any> = new EventEmitter();
  //cartItems: Book[] = [];
  // updateCartItems(book: Book){
  //   const bookIndex = this.cartItems.findIndex(item => item.ISBN === book.ISBN);
  //   if (bookIndex !== -1){
  //     this.cartItems[bookIndex].count++;
  //   }
  //   else{
  //     book.count = 1;
  //     this.addBook.emit({ count: book.count, bookData: book }); 
  //     //this.cartItems.push(book);
  //   }
  // }
  addToCart(book:Book){
    this.addBook.emit(book);
  }
}

