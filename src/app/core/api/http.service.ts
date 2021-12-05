import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}

  public sendJobPosting(payload: any): Observable<any> {
    const parsedPayload = JSON.stringify(payload);

    return this.http.post('/api', payload, {
      headers: {
        Origin: 'http://localhost:4200',
        'Access-Control-Request-Method': 'POST',
        'Access-Control-Request-Headers': 'Content-Type',
        'Content-Type': 'application/json'
      }
    });
  }
}
