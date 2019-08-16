import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'zen-invoice-input',
    templateUrl: './invoice-input.component.html',
    styleUrls: ['./invoice-input.component.css']
})
export class InvoiceInputComponent {
    
    @ViewChild('itemName') itemNameRef: ElementRef; 
    @ViewChild('itemPrice') itemPriceRef: ElementRef;
    invoiceItems = [];
    
    constructor() {}

    onAddVegetable(itemName: HTMLInputElement, 
        itemPrice: HTMLInputElement) {
        
          var invoiceItem = {
          type: 'veg',
          name: this.itemNameRef.nativeElement.value,
          price: this.itemPriceRef.nativeElement.value
        };
        this.invoiceItems.push(invoiceItem);
      }
    
      onAddCosmetic(itemName: HTMLInputElement, 
        itemPrice: HTMLInputElement) {
        var invoiceItem = {
          type: 'cos',
          name: this.itemNameRef.nativeElement.value,
          price: this.itemPriceRef.nativeElement.value
        };
        this.invoiceItems.push(invoiceItem);
      }
}