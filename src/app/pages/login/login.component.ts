import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ApiLoginService } from '../../services/api-login.service';

@Component({
  selector: 'app-login',
  imports: [
    RouterLink,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private _apiLoginService: ApiLoginService,
    private router: Router
  ) {}
  email: string = '';
  password: string = '';

  loginUserDataObj: { email: string; password: string } = {
    email: '',
    password: '',
  };

  loginValidation = new FormGroup({
    emailVal: new FormControl(null, [
      Validators.required,
      Validators.email,
      Validators.maxLength(255),
      Validators.minLength(5),
      Validators.pattern(
        /^(?=.{5,255}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      ),
    ]),
    passwordVal: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
      Validators.pattern(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+\-={}[\]\\:";'<>?,./~`]{5,20}$/
      ),
    ]),
  });

  userLoginData() {
    this.loginValidation.markAllAsTouched();

    if (!this.loginValidation.valid) return;
    this.loginUserDataObj = {
      email: this.email,
      password: this.password,
    };
    console.log(this.loginUserDataObj);
    this._apiLoginService.loginUser(this.loginUserDataObj).subscribe({
      next: (res) => {
        console.log('Login Success', res);
        if (res.token) {
          this._apiLoginService.storeTokenInCookie(res.token);
          this.router.navigate(['/home']);
        } else {
          console.log('Token not found in response!');
        }
      },
      error: (error) => {
        console.log('Login Error:', error);
      },
    });

    this.email = '';
    this.password = '';
    this.loginValidation.reset();
  }

  storeToken(token: string) {}

  get isEmailValid() {
    return this.loginValidation.controls.emailVal.valid;
  }
  get isPasswordValid() {
    return this.loginValidation.controls.passwordVal.valid;
  }
}
