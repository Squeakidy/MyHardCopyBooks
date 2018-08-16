import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../models/book-model';

@Component({
  selector: 'book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup;
  public submitted: boolean;

  constructor() { }

  ngOnInit() {
    this.bookForm = new FormGroup({
      name: new FormControl('book name', Validators.required),
      author:  new FormControl('author name', Validators.required),
      genre: new FormControl('genre', Validators.required)
    });
  }

  onSubmit(model: Book, isValid: boolean){
    this.submitted = true;
    console.log(model, isValid)
  }
}
