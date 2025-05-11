import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ApiResetPasswordService } from '../../services/api-reset-password.service';

@Component({
  selector: 'app-reset-password',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './reset-password.component.html',
})
export class ResetPasswordComponent implements OnInit {
  token: string | null = null;
  isLoading: boolean = false;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private _apiResetPassword: ApiResetPasswordService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.token = this.route.snapshot.paramMap.get('token');
    if (!this.token) {
      this.errorMessage = 'Invalid reset password link';
    }
  }

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
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+\-={}[\]\\:";'<>?,./~`]{5,20}$/
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

  sendResetPassword() {
    if (!this.resetPasswordValidation.valid) {
      this.errorMessage = 'Please fill all fields correctly';
      return;
    }

    if (!this.token) {
      this.errorMessage = 'Invalid reset token';
      return;
    }

    this.resetPasswordValidation.markAllAsTouched();
    this.errorMessage = null;
    this.successMessage = null;
    this.isLoading = true;

    const newPasswordObj = {
      newPassword: this.resetPasswordValidation.controls.passwordVal
        .value as string,
    };

    this._apiResetPassword.resetPassword(newPasswordObj, this.token).subscribe({
      next: (res) => {
        console.log('res is', res);
        this.successMessage = 'Password reset successfully!';
        this.isLoading = false;
        setTimeout(() => this._router.navigate(['/login']), 2000);
      },
      error: (err) => {
        console.log('error is:', err);
        this.isLoading = false;
        this.errorMessage =
          err.error?.message || 'Failed to reset password. Please try again.';
      },
    });
  }
}
