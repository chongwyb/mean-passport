import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  books: any;
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': localStorage.getItem('jwtToken'),
      'user_id': localStorage.getItem('user_id'),
    })
  };
  constructor(
    private http: HttpClient,
    private router: Router,
    private bookService: BookService,
  ) { }

  ngOnInit() {
    this.bookService.getBookList().subscribe(data => {
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
    this.bookService.createBook(book).subscribe(data =>{
      console.log((data as any).msg);
      this.books.push((data as any).book);
    })
  }
}
