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

  getAllStores() {
    return this.http.get<StorePagination>(`${environment.url_api}/Store`);
  }
}
