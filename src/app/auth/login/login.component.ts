import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../auth.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    username: ["", {
      validators: [Validators.required],
    }],
    password: ["", {
      validators: [Validators.required],
    }]
  });
  message = "";
  data: any;

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {

  }

  login() {
    this.authService.login(this.loginForm.value).subscribe(resp => {
      this.data = resp;
      localStorage.setItem('jwtToken', this.data.token);
      localStorage.setItem('user_id', this.data.user_id);
      this.router.navigate(['books']);
    }, err => {
      this.message = err.error.msg;
    });
  }
}
