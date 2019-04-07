import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LibraryService } from '../library.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  bookForm = this.formBuilder.group({
    isbn: ["", { validators: [Validators.required] }],
    title: ["", { validators: [Validators.required] }],
    author: ["", { validators: [Validators.required] }],
    publisher: ["", { validators: [Validators.required] }],
  })

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private libraryService: LibraryService,
  ) { }

  ngOnInit() {

  }

  create() {
    this.libraryService.createBook(this.bookForm.value).subscribe(data =>{
      console.log((data as any).msg);
      this.router.navigate(['books']);
    })
  }
}
