import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

/**
 * local variables in the service wont change until it is destroyed
 * use local variables when it is a component service
 */

@Injectable()
export class LibraryService {

    constructor(
        private http: HttpClient,
    ) { }

    getBookList() {
        let httpOptions = {
            headers: new HttpHeaders({
                'Authorization': localStorage.getItem('jwtToken'),
                'user_id': localStorage.getItem('user_id'),
            })
        };
        return this.http.get('/api/books', httpOptions);
    }

    createBook(book) {
        let httpOptions = {
            headers: new HttpHeaders({
                'Authorization': localStorage.getItem('jwtToken'),
                'user_id': localStorage.getItem('user_id'),
            })
        };
        return this.http.post('/api/book', book, httpOptions);
    }

    updateBook(book) {
        let httpOptions = {
            headers: new HttpHeaders({
                'Authorization': localStorage.getItem('jwtToken'),
                'user_id': localStorage.getItem('user_id'),
            })
        };
        return this.http.put('/api/book', book, httpOptions);
    }

    getBook(id) {
        let httpOptions = {
            headers: new HttpHeaders({
                'Authorization': localStorage.getItem('jwtToken'),
                'user_id': localStorage.getItem('user_id'),
            }),
            params: {id: id},
        };
        return this.http.get('/api/book', httpOptions);
    }
}