import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobomaticService {
  private url: string;
  private enctype: string;
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:5000";
    this.enctype = "multipart/form-data";
    this.headers = new HttpHeaders({'enctype': this.enctype});
   }

}
