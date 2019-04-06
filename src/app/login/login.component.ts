import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginData = { username: "", password: ""};
  message = "";
  data: any;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit() {
    
  }

  login() {
    this.http.post('/api/signin',this.loginData).subscribe(resp => {
      this.data = resp;
      localStorage.setItem('jwtToken', this.data.token);
      localStorage.setItem('user_id', this.data.user_id);
      this.router.navigate(['books']);
    }, err => {
      this.message = err.error.msg;
    });
  }
}
