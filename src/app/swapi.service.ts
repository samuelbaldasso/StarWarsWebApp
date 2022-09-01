import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  constructor(private http: HttpClient) {}

  getPeople(type: string, page: number): Observable<any> {
    const url = `https://swapi.dev/api/${type}/?page=${page}`;
    return this.http.get(url);
  }
}
