import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { WelcomeComponent } from './home/welcome.component';

import { ProductModule } from './products/product.module';

const appRoutes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
