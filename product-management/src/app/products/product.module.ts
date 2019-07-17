import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ConverToSpacesPipe } from '../shared/convert-to-spaces.pipes';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

const appRoutes: Routes = [
  {path: 'products', component: ProductListComponent },
  {path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent }
]

@NgModule({
  declarations: [
    ProductListComponent,
    ConverToSpacesPipe,
    ProductDetailComponent,
  ],
  imports: [
    RouterModule.forChild(appRoutes),
    SharedModule
  ]
})
export class ProductModule { }
