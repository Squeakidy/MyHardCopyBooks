import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book-model';
import { GetBooksService } from '../services/get-books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[]
  constructor(private bookService: GetBooksService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(){
    this.bookService.getBooks()
        .subscribe(books => this.books = books);
  }

}
