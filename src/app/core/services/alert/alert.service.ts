import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AlertPagination } from '../../models/alert-pagination.model';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private http: HttpClient) {}

  getAllAlerts(page: number = 0, search?: string) {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', '10');

    if (search) params = params.set('Search', search);
    return this.http.get<AlertPagination>(`${environment.url_api}/Alert`, {
      params,
    });

  }


  createAlert(product: any) {
    return this.http.post(`${environment.url_api}/Alert`, product);
  }


  deleteAlert(id: string) {
    return this.http.delete<any>(`${environment.url_api}/Alert/${id}`);
  }


}
