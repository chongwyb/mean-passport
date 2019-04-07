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
    this.router.navigate(["book/new"]);
  }
}
