import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '../../models/store.model';
import { environment } from 'src/environments/environment';
import { StorePagination } from '../../models/store-pagination.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<StorePagination>(`${environment.url_api}/Store`);
  }

  create(store: any) {
    return this.http.post<Store>(`${environment.url_api}/Store`, store);
  }

  update(id: string, store: any) {
    return this.http.put<Store>(`${environment.url_api}/Store/${id}`, store);
  }

  delete(id: string) {
    return this.http.delete<any>(`${environment.url_api}/Store/${id}`);
  }
}
