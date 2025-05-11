import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { RecoveryPasswordComponent } from './pages/recovery-password/recovery-password.component';
import { PaymentComponent } from './pages/payment/payment.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Game Hub' },
  {
    path: 'admin/dashboard',
    component: AdminDashboardComponent,
  },
  {
    path: 'checkout',
    loadComponent: () =>
      import('./pages/checkout/checkout.component').then(
        (obj) => obj.CheckoutComponent
      ),
    title: 'Checkout',
  },
  {
    path: 'wishlist',
    loadComponent: () =>
      import('./pages/favorites/favorites.component').then(
        (obj) => obj.FavoritesComponent
      ),
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
