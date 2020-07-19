import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { AdminHeaderComponent } from './shared/components/admin-header/admin-header.component';
import { AdminLoginPageComponent } from './admin/admin-login-page/admin-login-page.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ServicePageComponent } from './main-layout/service-page/service-page.component';
import { AboutPageComponent } from './main-layout/about-page/about-page.component';
import { PricePageComponent } from './main-layout/price-page/price-page.component';
import { ContactPageComponent } from './main-layout/contact-page/contact-page.component';
import { GaleryPageComponent } from './main-layout/galery-page/galery-page.component';
import { GaleryPopupComponent } from './shared/components/galery-popup/galery-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AdminNavComponent,
    AdminHeaderComponent,
    AdminLoginPageComponent,
    MainLayoutComponent,
    FooterComponent,
    HeaderComponent,
    ServicePageComponent,
    AboutPageComponent,
    PricePageComponent,
    ContactPageComponent,
    GaleryPageComponent,
    GaleryPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
