import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginData = { username: "", password: "" };
  message = "";
  data: any;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {

  }

  login() {
    this.authService.login(this.loginData).subscribe(resp => {
      this.data = resp;
      localStorage.setItem('jwtToken', this.data.token);
      localStorage.setItem('user_id', this.data.user_id);
      this.router.navigate(['books']);
    }, err => {
      this.message = err.error.msg;
    });
  }
}
