import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
    constructor(
        private http: HttpClient,
    ) { }

    login(credentials) {
        return this.http.post('/api/signin', credentials)
    }

    signup(credentials) {
        return this.http.post('/api/signup', credentials)
    }
}