import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ApiRecoverPasswordService } from '../../services/api-recover-password.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recovery-password',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './recovery-password.component.html',
})
export class RecoveryPasswordComponent {
  constructor(private _apiRecoverPasswordService: ApiRecoverPasswordService) {}
  emailStatus: string = '';
  isLoading: boolean = false;

  userEmailInputObj: { email: string } | null = { email: '' };
  recoveryPasswordEmailValidation = new FormGroup({
    emailVal: new FormControl('', [
      Validators.email,
      Validators.minLength(5),
      Validators.maxLength(255),
      Validators.required,
      Validators.pattern(
        /^(?=.{5,255}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      ),
    ]),
  });
  sendRecoveryEmail() {
    this.recoveryPasswordEmailValidation.markAllAsTouched();
    if (!this.recoveryPasswordEmailValidation.valid) return;
    this.userEmailInputObj = {
      email: this.recoveryPasswordEmailValidation.controls.emailVal.value ?? '',
    };
    this.isLoading = true;
    console.log(this.userEmailInputObj);
    this._apiRecoverPasswordService
      .recoverPassword(this.userEmailInputObj)
      .subscribe({
        next: (res) => {
          console.log('Email queued for delivery');
          this.emailStatus =
            'We sent an email with a password-reset link. Check it.';
          this.isLoading = false;
        },
        error: (err) => {
          console.log('Faild to send', err);
          this.emailStatus = 'Email failed to send. Please try again.';
          this.isLoading = false;
        },
      });
    this.recoveryPasswordEmailValidation.reset();
  }
  get isEmailValid() {
    return this.recoveryPasswordEmailValidation.controls.emailVal.valid;
  }
}
