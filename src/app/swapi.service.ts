import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  constructor(private http: HttpClient) { }

  getPeople(page: any): Observable<any> {
    const url = `https://swapi.dev/api/people/?page=${page}`;
    return this.http.get(url);
  }

  getPeopleById(id: any): Observable<any> {
    const url = `https://swapi.dev/api/people/${id}`;
    return this.http.get(url);
  }
}
