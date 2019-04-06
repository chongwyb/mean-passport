import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: any;

  constructor(
    private router: Router,
    private libraryService: LibraryService,
  ) { }

  ngOnInit() {
    this.libraryService.getBookList().subscribe(data => {
      this.books = data;
      console.log(this.books);
    }, err => {
      if(err.status === 401) {
        this.router.navigate(['login']);
      }
    });
  }

  logout() {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('user_id');
    this.router.navigate(['login']);
  }

  create() {
    let book = {
      isbn: "1",
      title: "testbook",
      author: "me",
      publisher: "you",
    }
    this.libraryService.createBook(book).subscribe(data =>{
      console.log((data as any).msg);
      this.books.push((data as any).book);
    })
  }
}
