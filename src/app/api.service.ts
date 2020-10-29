import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // add here ya bor3y
  baseURL = 'https://solutions-eg.org/';
  // baseURL = 'http://127.0.0.1:8000/';


  baseImageURL = this.baseURL + '/';
  httpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private http: HttpClient) { }




  addContactUs(data): Observable<any> {
    return this.http.post(this.baseURL + 'contact-api', data, {headers: this.httpHeaders});
  }

  addNewsletter(email): Observable<any> {
    console.log(email);
    
    return this.http.post(this.baseURL + 'subscribe-api', {'email': email}, {headers: this.httpHeaders});
  }

  
}
