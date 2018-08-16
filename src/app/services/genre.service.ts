import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre } from '../models/genre-model';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private apiUrl = "http://localhost:28627/api/Genre";
  constructor(private http: HttpClient) { }

  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.apiUrl);
  }
}