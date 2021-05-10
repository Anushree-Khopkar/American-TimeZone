import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(){
    let url = "http://worldtimeapi.org/api/timezone/America";
    return this.http.get(url);
  }
}

