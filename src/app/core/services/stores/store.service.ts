import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '../../models/store.model';
import { environment } from 'src/environments/environment';
import { StorePagination } from '../../models/store-pagination.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private http: HttpClient) {}

  getAll(page: number = 0, search?: string) {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', '20');

    if (search) params = params.set('Search', search);

    return this.http.get<StorePagination>(`${environment.business_url_api}/Store`, {
      params,
    });
  }

  create(store: any) {
    return this.http.post<Store>(`${environment.business_url_api}/Store`, store);
  }

  update(id: string, store: any) {
    return this.http.put<Store>(`${environment.business_url_api}/Store/${id}`, store);
  }

  delete(id: string) {
    return this.http.delete<any>(`${environment.business_url_api}/Store/${id}`);
  }
}
