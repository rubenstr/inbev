import { Injectable } from '@angular/core';
import { Observable, concat } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Product } from '../share/product';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  URL = environment.apiUrl;
  
  data:any[] = [];


  constructor(private http: HttpClient) { }

  getProductors(): any {
    return this.http.get<Product[]>(`${this.URL}products`)
      // .subscribe(
      //   resultado => {
      //     this.data = resultado;
      //     return this.data;
      //   },
      //   erro => {
      //     if (erro.status == 404) {
      //       return 'Produto não localizado.';
      //     } else {
      //       return 'Generic Error';
      //     }
      //   }
      // );

  }



  //  getProductors() {

  //    const promise = this.http.get<[]>(`${this.URL}products`).toPromise();
  
  //     return promise.then(
  //       (response: any[]) => {
  //         // Success callback
  //         this.data = JSON.stringify(response);
  //         return this.data;
  //       },
  //       (error: any) => {
  //         // Error callback
  //         console.log(error);
  //       }
  //     );

  //   const promise = new Promise((resolve, reject) => {
  //     const apiURL = this.URL;
  //     this.http
  //       .get(`${apiURL}products`)
  //       .toPromise()
  //       .then((res: any) => {
  //         // Success
  //         this.data = res;
  //         return this.data;
  //         },

  //         err => {
  //           // Error
  //           reject(err);
  //         }
  //       );
  //   });
   
}
