import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InvoiceInputComponent } from './invoice-input/invoice-input.component';
import { InvoiceDisplayComponent } from './invoice-display/invoice-display.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceInputComponent,
    InvoiceDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
