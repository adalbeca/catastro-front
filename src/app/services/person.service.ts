import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  URL_API = 'http://localhost:9091/api/';
  constructor(private http: HttpClient) {
    console.log('geter');
    this.http.get(this.URL_API + 'person/15149183').subscribe(console.log)
  }
}
