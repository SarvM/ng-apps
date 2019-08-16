import { Component, Input } from '@angular/core';

@Component({
    selector: 'zen-invoice-display',
    templateUrl: './invoice-display.component.html',
    styleUrls: ['./invoice-display.component.css']
})
export class InvoiceDisplayComponent { 
    // invoiceItem : { type: string, itemName: string, itemPrice: string } = { type: 'veg', itemName: 'Veg', itemPrice: '100'};
    @Input('invItem') invoiceItem : { type: string, itemName: string, itemPrice: string };
    constructor() {
        
    }
}