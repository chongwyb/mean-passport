import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LibraryService } from '../library.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  bookId = this.route.snapshot.params["id"];
  bookForm = this.formBuilder.group({
    _id: [""],
    user_id: [""],
    isbn: ["", { validators: [Validators.required] }],
    title: ["", { validators: [Validators.required] }],
    author: ["", { validators: [Validators.required] }],
    publisher: ["", { validators: [Validators.required] }],
  })

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private libraryService: LibraryService,
  ) { }

  ngOnInit() {
    if(this.bookId){
      this.libraryService.getBook(this.bookId).subscribe(data=>{
        let book = data as any;
        this.bookForm.reset({
          _id: this.bookId,
          user_id: book.user_id,
          isbn: book.isbn,
          title: book.title,
          author: book.author,
          publisher: book.publisher,
        })
      })
    }
  }

  create() {
    this.libraryService.createBook(this.bookForm.value).subscribe(data => {
      console.log((data as any).msg);
      this.router.navigate(['books']);
    })
  }

  update() {
    this.libraryService.updateBook(this.bookForm.value).subscribe(data => {
      console.log((data as any).msg);
      this.router.navigate(['books']);
    })
  }
}
