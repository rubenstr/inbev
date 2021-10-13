import { Component, OnInit } from '@angular/core';
import { ProductListService } from './services/product-list.service';

import { environment } from 'src/environments/environment';
import { Product } from './share/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

 listProduct = [];
 URL = environment.apiUrl;
 amount: number = 5;

  constructor(private productList: ProductListService) { 
  //  console.log(environment.apiUrl)
  }

  ngOnInit(): void {
    this.getData();
  }


    getData() {
   this.productList.getProductors()
   .subscribe(dados => this.listProduct = dados);
  }

  

}
