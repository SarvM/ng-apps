import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { IProduct } from './product';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string = '';

  filteredProducts: IProduct[] = [];
  pageTile: string = 'Product List';

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string){
    this._listFilter = value;
    if(this.products) this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter): this.products;
  }

  products: IProduct[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error => this.errorMessage = <any>error
    );
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => {
      return product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    });
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

}
