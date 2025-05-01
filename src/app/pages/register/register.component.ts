import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
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
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private _apiUsersService: ApiUsersService) {}

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phoneNumber: string = '';
  password: string = '';
  confirmPassword: string = '';

  registerUserDataObj: {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    password: string;
  } = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
  };

  registerValidation = new FormGroup({
    fnameVal: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
      Validators.pattern(/^[a-zA-Z]{3,50}$/),
    ]),
    lnameVal: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
      Validators.pattern(/^[a-zA-Z]{3,50}$/),
    ]),
    emailVal: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(255),
      Validators.email,
      Validators.pattern(
        /^(?=.{5,255}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      ),
    ]),

    phoneNumberVal: new FormControl(null, [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(15),
      Validators.pattern(/^[0-9]{10,15}$/),
    ]),

    passwordVal: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
      Validators.pattern(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+\-={}[\]\\:";'<>?,./~`]{5,20}$/
      ),
    ]),
    confirmPasswordVal: new FormControl(null, [
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
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      phone: this.phoneNumber,
      password: this.password,
    };
    console.log(this.registerUserDataObj);
    // send user data to backend
    this._apiUsersService.addUser(this.registerUserDataObj).subscribe({
      next: (res) => {
        console.log('User Registerd', res);
      },
      error: (err) => {
        console.log('Error: ', err);
      },
    });
    // reset variables
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.phoneNumber = '';
    this.password = '';
    this.confirmPassword = '';
    // reset inputs validaton
    this.registerValidation.reset();
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
