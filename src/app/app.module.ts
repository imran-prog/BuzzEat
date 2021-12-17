import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './home/hero/hero.component';
import { CategoryComponent } from './home/category/category.component';
import { BrandsComponent } from './home/brands/brands.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './register/login/login.component';
import { SignupComponent } from './register/signup/signup.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { LocationBaseComponent } from './restaurant/location-base/location-base.component';
import { ProductBaseComponent } from './restaurant/product-base/product-base.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './shop/cart/cart.component';
import { BioComponent } from './shop/bio/bio.component';
import { DealsComponent } from './shop/deals/deals.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HeroComponent,
    CategoryComponent,
    BrandsComponent,
    RegisterComponent,
    LoginComponent,
    SignupComponent,
    RestaurantComponent,
    LocationBaseComponent,
    ProductBaseComponent,
    ShopComponent,
    CartComponent,
    BioComponent,
    DealsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
