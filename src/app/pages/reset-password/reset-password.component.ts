import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './reset-password.component.html',
})
export class ResetPasswordComponent {
  constructor() {}
  isLoading: boolean = false;

  resetPasswordValidation = new FormGroup({
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

  get isPasswordValid() {
    return this.resetPasswordValidation.controls.passwordVal.valid;
  }
  get isConfirmPasswordValid() {
    return (
      this.resetPasswordValidation.controls.confirmPasswordVal.value &&
      this.resetPasswordValidation.controls.passwordVal.value ===
        this.resetPasswordValidation.controls.confirmPasswordVal.value
    );
  }

  sendResetPassword() {}
}
