import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { RecoveryPasswordComponent } from './pages/recovery-password/recovery-password.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { authGuard } from './guards/auth.guard';
import { paymentGuard } from './guards/payment.guard';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Game Hub' },
  {
    path: 'adminDashboard',
    loadComponent: () =>
      import('./pages/admin-dashboard/admin-dashboard.component').then(
        (obj) => obj.AdminDashboardComponent
      ),
    canActivate: [authGuard],
    title: 'AdminDashboard',
  },
  {
    path: 'checkout',
    loadComponent: () =>
      import('./pages/checkout/checkout.component').then(
        (obj) => obj.CheckoutComponent
      ),
    canActivate: [authGuard],
    title: 'Checkout',
  },
  {
    path: 'wishlist',
    loadComponent: () =>
      import('./pages/favorites/favorites.component').then(
        (obj) => obj.FavoritesComponent
      ),
    canActivate: [authGuard],
    title: 'Favorites Games',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'payment',
    loadComponent: () =>
      import('./pages/payment/payment.component').then(
        (obj) => obj.PaymentComponent
      ),
    canActivate: [authGuard, paymentGuard],
    title: 'Payment',
  },
  {
    path: 'games/:slug',
    loadComponent: () =>
      import('./pages/game-details/game-details.component').then(
        (obj) => obj.GameDetailsComponent
      ),
    title: 'Game Details',
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register',
  },
  {
    path: 'passwordRecovery',
    component: RecoveryPasswordComponent,
    title: 'Password Recovery',
  },
  {
    path: 'reset-password/:id',
    component: ResetPasswordComponent,
    title: 'Reset your password',
  },
  {
    path: 'payment',
    component: PaymentComponent,
    title: 'Payment Page',
  },
  {
    path: 'not-found',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (obj) => obj.NotFoundComponent
      ),
  },
  { path: '**', redirectTo: 'not-found' },
];
