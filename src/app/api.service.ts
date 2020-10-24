import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = '';


  baseImageURL = this.baseURL + '/';
  httpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private http: HttpClient) { }





  addContactUs(data): Observable<any> {
    return this.http.post(this.baseURL + '/api/submit/', data, {headers: this.httpHeaders});
  }



  
}
