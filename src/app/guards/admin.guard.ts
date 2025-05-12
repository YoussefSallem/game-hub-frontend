import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ApiLoginService } from '../services/api-login.service';
import { ToastService } from '../services/toast.service';

export const adminGuard = () => {
  const router = inject(Router);
  const apiLoginService = inject(ApiLoginService);
  const toastService = inject(ToastService);

  const isAdmin = apiLoginService.isAdmin();

  if (!apiLoginService.isLoggedIn()) {
    toastService.show('Please login first', 'error');
    router.navigate(['/login']);
    return false;
  }

  if (isAdmin) {
    return true;
  }

  toastService.show('Access denied: Admin privileges required', 'error');
  router.navigate(['/home']);
  return false;
};
