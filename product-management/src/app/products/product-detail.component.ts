import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IProduct } from './product';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: IProduct | undefined;
  id: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  onBack(){
    this.router.navigate(['/products']);
  }

}
