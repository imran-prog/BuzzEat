import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { LocationsComponent } from './locations/locations.component';
import { Error404Component } from './error404/error404.component';
import { PayoutComponent } from './payout/payout.component';
import { LocationBaseComponent } from './restaurant/location-base/location-base.component';
import { ProductBaseComponent } from './restaurant/product-base/product-base.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nearme/pizza', component: ProductBaseComponent },
  { path: 'nearme/islamabad', component: LocationBaseComponent },
  { path: 'register', component: SignupComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'payout', component: PayoutComponent },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
