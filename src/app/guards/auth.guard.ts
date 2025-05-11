import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ApiLoginService } from '../services/api-login.service';

export const authGuard = () => {
  const authService = inject(ApiLoginService);
  const router = inject(Router);

  if (authService.isLoggedIn() && authService.isValidToken()) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};
