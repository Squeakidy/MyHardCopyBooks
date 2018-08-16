import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book-model';
import { Genre } from '../models/genre-model';
import { GetBooksService } from '../services/get-books.service';
import { GenreService } from '../services/genre.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];
  genres: Genre[];
  constructor(private bookService: GetBooksService, private genreService: GenreService) { }

  ngOnInit() {
    this.getGenres();
    this.getBooks();
  }

  getBooks(){
    this.bookService.getBooks()
        .subscribe(books => this.books = books);
  }

  getGenres() {
    this.genreService.getGenres()
        .subscribe(genres => this.genres = genres);
  }

}
