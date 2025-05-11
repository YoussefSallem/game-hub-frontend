import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

export const paymentGuard = () => {
  const router = inject(Router);
  const location = inject(Location);

  const currentUrl = location.path();
  const referrer = document.referrer;

  // Allow access if coming from checkout
  if (referrer.includes('/checkout') || currentUrl.includes('/checkout')) {
    return true;
  }

  // If not coming from checkout, redirect to checkout
  router.navigate(['/checkout']);
  return false;
};
