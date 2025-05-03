import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { RecoveryPasswordComponent } from './pages/recovery-password/recovery-password.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Game Hub' },
  {
    path: 'adminDashboard',
    loadComponent: () =>
      import('./pages/admin-dashboard/admin-dashboard.component').then(
        (obj) => obj.AdminDashboardComponent
      ),
    title: 'AdminDashboard',
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
    path: 'favorites',
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
    path: 'productDetails',
    loadComponent: () =>
      import('./pages/product-details/product-details.component').then(
        (obj) => obj.ProductDetailsComponent
      ),
    title: 'Product Details',
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
    path: 'not-found',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (obj) => obj.NotFoundComponent
      ),
  },
  { path: '**', redirectTo: 'not-found' },
];
