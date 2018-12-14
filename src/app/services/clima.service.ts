import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {RequestOptions, Request, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  constructor(private http: HttpClient) { }

  
  consultarClima(id) {
    return this
      .http
      .get(`https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=e56d6afaf669d09ba22ed56702c65bbd`).map(res=>res);      
  }
}

