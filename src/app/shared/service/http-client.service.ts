import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http: HttpClient) {}

  get(url) {
    let headers = new HttpHeaders({
      "token": localStorage.getItem("id_token")
    });

    return this.http.get(url, {
      headers: headers
    });
  }

  post(url, data) {
    let headers = new HttpHeaders({
      "token": localStorage.getItem("id_token")
    });
    return this.http.post(url, data, {
      headers: headers
    });
  }
}
