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
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phoneNumber: string = '';
  password: string = '';
  confirmPassword: string = '';

  registerUserDataObj: {
    FirstName: string;
    LastName: string;
    Email: string;
    PhoneNumber: string;
    Password: string;
    ConfirmPassword: string;
  } = {
    FirstName: '',
    LastName: '',
    Email: '',
    PhoneNumber: '',
    Password: '',
    ConfirmPassword: '',
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
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+=\-{}[\]:;"'<>,.?/~`]{5, 20}$/
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
    if (!this.registerValidation.valid) return;
    this.registerUserDataObj = {
      FirstName: this.firstName,
      LastName: this.lastName,
      Email: this.email,
      PhoneNumber: this.phoneNumber,
      Password: this.password,
      ConfirmPassword: this.confirmPassword,
    };
    console.log(this.registerUserDataObj);
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.phoneNumber = '';
    this.password = '';
    this.confirmPassword = '';
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
