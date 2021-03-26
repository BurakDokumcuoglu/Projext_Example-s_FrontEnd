import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //backend datasına ulaşabilmeyi sağlıyor(api çağrısı)

import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44339/api/';  //url'nin hiç değişmeyecek olan baş kısmı,eklemelere göre değişkenlikler olacak

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ListResponseModel<Product>> { 
     //Servis içindeki metodun observable olması, subscribe edilebileceğini gösterir
     let newPath=this.apiUrl+'products/getall';
    return this.httpClient.get<ListResponseModel<Product>>(newPath);   //javascriptte ctor'da gelen değişken direk kullanılabiliyor
  }

  getProductsByCategory(categoryId:number): Observable<ListResponseModel<Product>> {  
    let newPath=this.apiUrl+'products/getbycategory?categoryId='+categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);  
  }
}
