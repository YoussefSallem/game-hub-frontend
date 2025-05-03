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
import { OnInit } from '@angular/core';

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
export class LoginComponent implements OnInit {
  constructor(
    private _apiLoginService: ApiLoginService,
    private router: Router
  ) {
    this.rememberMe = this._apiLoginService.getRememberMe();
  }

  ngOnInit(): void {
    if (this._apiLoginService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
  }

  email: string = '';
  password: string = '';
  errorMessage: string = '';
  rememberMe: boolean = false;
  isLoading: boolean = false;

  loginUserDataObj: { email: string | null; password: string | null } = {
    email: '',
    password: '',
  };

  loginValidation = new FormGroup({
    emailVal: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(255),
      Validators.minLength(5),
      Validators.pattern(
        /^(?=.{5,255}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      ),
    ]),
    passwordVal: new FormControl('', [
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
      email: this.loginValidation.controls.emailVal.value,
      password: this.loginValidation.controls.passwordVal.value,
    };

    this.isLoading = true;
    console.log(this.loginUserDataObj);
    console.log('Remember Me value:', this.rememberMe);

    this._apiLoginService.loginUser(this.loginUserDataObj).subscribe({
      next: (res) => {
        console.log('Login Success', res);
        this.isLoading = false;
        if (res.token) {
          this._apiLoginService.storeTokenInCookie(res.token, this.rememberMe);
          this.router.navigate(['/home']);
        } else {
          console.log('Token not found in response!');
        }
      },
      error: (error) => {
        this.isLoading = false;
        if (error.status === 400) {
          this.rememberMe = false;
          this.errorMessage = 'Invalid Email or Password';
        } else {
          this.rememberMe = false;
          this.errorMessage = 'something went wrong, try again later.';
        }
      },
    });

    this.loginValidation.reset();

    // remove focus from input after submit
    (document.activeElement as HTMLElement).blur();
    this.loginValidation.controls.passwordVal.markAsUntouched(); // to prevent "required" error
  }

  get isEmailValid() {
    return this.loginValidation.controls.emailVal.valid;
  }
  get isPasswordValid() {
    return this.loginValidation.controls.passwordVal.valid;
  }
}
