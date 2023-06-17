import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '../../models/store.model';
import { environment } from 'src/environments/environment';
import { StockPagination } from '../../models/stock-pagination.model';
import { Product } from '../../models/stock.model';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor(private http: HttpClient) {}

  getAllProducts(page: number = 0, search?: string) {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', '20');

    if (search) params = params.set('Search', search);

    return this.http.get<StockPagination>(`${environment.business_url_api}/Product`, {
      params,
    });
  }

  getStoreProducts(idStore: string, page: number = 0, search?: string) {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', '20');

    if (search) params = params.set('Search', search);

    return this.http.get<StockPagination>(`${environment.business_url_api}/Product/Store/${idStore}`, {
      params,
    });
  }


  createProduct(product: any) {
    return this.http.post(`${environment.business_url_api}/Product`, product);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${environment.business_url_api}/Product/${id}`);
  }

  updateProduct(id: string, product: any) {
    return this.http.put(`${environment.business_url_api}/Product/${id}`, product);
  }

  deleteProduct(id: string) {
    return this.http.delete<any>(`${environment.business_url_api}/Product/${id}`);
  }


}
