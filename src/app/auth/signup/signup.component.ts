import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../auth.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm = this.formBuilder.group({
    username: ["", {
      validators: [Validators.required],
      asyncValidators: [],
      updateOn: "change",
    }],
    password: ["", {
      validators: [Validators.required],
    }]
  });
  message = "";

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
  }

  signup() {
    this.authService.signup(this.signupForm.value).subscribe(resp => {
      console.log(resp);
      if ((resp as any).success) {
        this.router.navigate(['login']);
      } else {
        this.message = (resp as any).msg;
      }
    }, err => {
      this.message = err.error.msg;
    });
  }
}
