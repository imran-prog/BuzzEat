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
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { LocationBaseComponent } from './restaurant/location-base/location-base.component';
import { ProductBaseComponent } from './restaurant/product-base/product-base.component';
import { ShopComponent } from './shop/shop.component';
import { BioComponent } from './shop/bio/bio.component';
import { DealsComponent } from './shop/deals/deals.component';
import { PayoutComponent } from './payout/payout.component';
import { Error404Component } from './error404/error404.component';
import { FeaturesComponent } from './home/features/features.component';
import { MenuComponent } from './shop/menu/menu.component';
import { ReviewsComponent } from './shop/reviews/reviews.component';
import { InfoComponent } from './shop/info/info.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { LocationsComponent } from './locations/locations.component';
import { NewsletterComponent } from './home/newsletter/newsletter.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { AccountComponent } from './account/account.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HeroComponent,
    CategoryComponent,
    BrandsComponent,
    LoginComponent,
    SignupComponent,
    RestaurantComponent,
    LocationBaseComponent,
    ProductBaseComponent,
    ShopComponent,
    BioComponent,
    DealsComponent,
    PayoutComponent,
    Error404Component,
    NewsletterComponent,
    FeaturesComponent,
    MenuComponent,
    ReviewsComponent,
    InfoComponent,
    AboutComponent,
    ContactComponent,
    PrivacyComponent,
    LocationsComponent,
    CartComponent,
    ProfileComponent,
    FavouriteComponent,
    AccountComponent,
    SearchComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
