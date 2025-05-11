import { CommonModule } from '@angular/common';
import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { RouterLink, RouterModule, Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ApiUsersService } from '../../services/api-users.service';

@Component({
  selector: 'app-register',
  imports: [
    RouterLink,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
})
export class RegisterComponent implements AfterViewInit {
  @ViewChild('emailInput') emailInput!: ElementRef;
  constructor(
    private _apiUsersService: ApiUsersService,
    private router: Router
  ) {}

  errMessage: string = '';
  isLoading: boolean = false;

  registerUserDataObj: {
    first_name: string | null;
    last_name: string | null;
    email: string | null;
    phone: string | null;
    password: string | null;
  } = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
  };

  ngAfterViewInit() {
    this.emailInput.nativeElement.focus();
  }

  registerValidation = new FormGroup({
    fnameVal: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
      Validators.pattern(/^[a-zA-Z]{3,50}$/),
    ]),
    lnameVal: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
      Validators.pattern(/^[a-zA-Z]{3,50}$/),
    ]),
    emailVal: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(255),
      Validators.email,
      Validators.pattern(
        /^(?=.{5,255}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      ),
    ]),

    phoneNumberVal: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(15),
      Validators.pattern(/^[0-9]{10,15}$/),
    ]),

    passwordVal: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
      Validators.pattern(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+\-={}[\]\\:";'<>?,./~`]{5,20}$/
      ),
    ]),
    confirmPasswordVal: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
      Validators.pattern(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+=\-{}[\]:;"'<>,.?/~`]{5,20}$/
      ),
    ]),
  });

  userRegisterData() {
    this.registerValidation.markAllAsTouched();

    if (!this.registerValidation.valid) return;
    this.registerUserDataObj = {
      first_name: this.registerValidation.controls.fnameVal.value,
      last_name: this.registerValidation.controls.lnameVal.value,
      email: this.registerValidation.controls.emailVal.value,
      phone: this.registerValidation.controls.phoneNumberVal.value,
      password: this.registerValidation.controls.passwordVal.value,
    };
    this.isLoading = true;

    // send user data to backend
    this._apiUsersService.addUser(this.registerUserDataObj).subscribe({
      next: (res) => {
        console.log('User Registered', res);
        this.isLoading = false;
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.isLoading = false;
        this.errMessage = err.error.errMessage;
      },
    });
    // reset inputs validation
    this.registerValidation.reset();

    // remove focus from input after submit
    (document.activeElement as HTMLElement).blur();
    this.registerValidation.controls.confirmPasswordVal.markAsUntouched(); // to prevent "required" error
  }

  get isFirstNameValid() {
    return this.registerValidation.controls.fnameVal.valid;
  }
  get isLastNameValid() {
    return this.registerValidation.controls.lnameVal.valid;
  }
  get isEmailValid() {
    return this.registerValidation.controls.emailVal.valid;
  }
  get isPhoneNumberValid() {
    return this.registerValidation.controls.phoneNumberVal.valid;
  }
  get isPasswordValid() {
    return this.registerValidation.controls.passwordVal.valid;
  }
  get isConfirmPasswordValid() {
    return (
      this.registerValidation.controls.confirmPasswordVal.value &&
      this.registerValidation.controls.passwordVal.value ===
        this.registerValidation.controls.confirmPasswordVal.value
    );
  }
}
