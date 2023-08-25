import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodexService {
  private url: string;
  private enctype: string;
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:5000";
    this.enctype = "multipart/form-data";
    this.headers = new HttpHeaders({'enctype': this.enctype});
   }

  upload(type: string, id: string, file?: File, metadata?: {[key: string]: string}): Observable<any> {
    let formData = new FormData();
    formData.append('type', type);
    formData.append('id', id);
    if (file) formData.append('file', file);
    if (metadata) for (const key in metadata) formData.append(key, metadata[key]);
    return this.http.post(this.url+'/upload', formData, {headers: this.headers});
  }
  query(type: string, id?: string, file?: File, metadata?: {[key: string]: string}): Observable<any> {
    let formData = new FormData();
    formData.append('type', type);
    if (id) formData.append('id', id);
    if (file) formData.append('file', file);
    if (metadata) for (const key in metadata) formData.append(key, metadata[key]);
    return this.http.post(this.url+'/query', formData, {headers: this.headers});
  }
}



