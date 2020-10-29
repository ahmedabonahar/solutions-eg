import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // add here ya bor3y
  baseURL = '';


  baseImageURL = this.baseURL + '/';
  httpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private http: HttpClient) { }




  addContactUs(data): Observable<any> {
    return this.http.post(this.baseURL + '/', data, {headers: this.httpHeaders});
  }

  addNewsletter(email): Observable<any> {
    return this.http.post(this.baseURL + '/', {'email': email}, {headers: this.httpHeaders});
  }



  
}
