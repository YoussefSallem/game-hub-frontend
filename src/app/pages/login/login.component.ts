import {
  Component,
  ViewChild,
  AfterViewInit,
  ElementRef,
  NgZone,
} from '@angular/core';
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
import { environment } from '../../environments/environment';

declare const google: any;

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
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild('emailInput') emailInput!: ElementRef;
  constructor(
    private _apiLoginService: ApiLoginService,
    private router: Router,
    private _ngZone: NgZone
  ) {
    this.rememberMe = this._apiLoginService.getRememberMe();
  }
  client_id2 = environment.client_id2;

  ngOnInit(): void {
    if (this._apiLoginService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
  }

  handleCredentialResponse(response: any) {
    this._ngZone.run(() => {
      fetch('https://game-hub-backend-woad.vercel.app/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          credential: response.credential,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('Backend response:', data);
          this._apiLoginService.storeTokenInCookie(data.token, false);
          this.router.navigate(['/home']);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    });
  }

  ngAfterViewInit(): void {
    this.emailInput.nativeElement.focus();
    //  Initialize Google Sign-In with the prompt parameter.
    google.accounts.id.initialize({
      client_id: `${environment.client_id2}`,
      callback: (response: any) => this.handleCredentialResponse(response),
      prompt: 'select_account',
    });

    google.accounts.id.renderButton(document.getElementById('g_id_signin'), {
      theme: 'outline',
      size: 'miduem',
      text: 'signin_with',
      shape: 'rectangular',
      logo_alignment: 'left',
      width: 280,
      locale: 'en',
    });
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
