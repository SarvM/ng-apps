import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  invoiceItem : { type: string, itemName: string, itemPrice: string } = { type: 'veg', itemName: 'Veg - From Parent Component', itemPrice: '100'};
  //itemName;
  //itemPrice;
  // @ViewChild('itemName') itemNameRef: ElementRef; 
  // @ViewChild('itemPrice') itemPriceRef: ElementRef;
  // invoiceItems = [];

  // onAddVegetable(itemName: HTMLInputElement, 
  //   itemPrice: HTMLInputElement) {
    
  //     var invoiceItem = {
  //     type: 'veg',
  //     name: this.itemNameRef.nativeElement.value,
  //     price: this.itemPriceRef.nativeElement.value
  //   };
  //   this.invoiceItems.push(invoiceItem);
  // }

  // onAddCosmetic(itemName: HTMLInputElement, 
  //   itemPrice: HTMLInputElement) {
  //   var invoiceItem = {
  //     type: 'cos',
  //     name: this.itemNameRef.nativeElement.value,
  //     price: this.itemPriceRef.nativeElement.value
  //   };
  //   this.invoiceItems.push(invoiceItem);
  // }
}
