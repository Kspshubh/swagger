import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwaggerService {
  constructor(private http: HttpClient) {}

  saveData(payload: any): Observable<any> {
    const url = 'https://demo.he.nic.in/pmusha/saveOrUpdateNdmcBasicDetail';
    return this.http.post(url, payload);
  }
}