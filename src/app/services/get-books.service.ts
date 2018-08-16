import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book-model';

@Injectable({
  providedIn: 'root'
})
export class GetBooksService {

  private apiUrl = "http://localhost:28627/api/book";
  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }
}
