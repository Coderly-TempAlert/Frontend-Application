import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '../../models/store.model';
import { environment } from 'src/environments/environment';
import { StockPagination } from '../../models/stock-pagination.model';

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

    return this.http.get<StockPagination>(`${environment.url_api}/api/Product`, {
      params,
    });
  }

  getStoreProducts(id: string, page: number = 0, search?: string) {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', '20');

    if (search) params = params.set('Search', search);

    return this.http.get<StockPagination>(`${environment.url_api}/api/Product/Store/${id}`, {
      params,
    });
  }


  createProduct(product: any) {
    return this.http.post(`${environment.url_api}/api/Product`, product);
  }

  getProduct(id: string) {
    return this.http.get(`${environment.url_api}/api/Product/${id}`);
  }

  updateProduct(id: string, product: any) {
    return this.http.put(`${environment.url_api}/api/Product/${id}`, product);
  }

  deleteProduct(id: string) {
    return this.http.delete<any>(`${environment.url_api}/api/Product/${id}`);
  }


}