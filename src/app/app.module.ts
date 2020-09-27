import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

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
import { AdminGaleryPageComponent } from './admin/admin-layout/admin-galery-page/admin-galery-page.component';
import { AdminGaleryAddComponent } from './shared/components/admin-galery-add/admin-galery-add.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { environment } from 'src/environments/environment';
import { AdminServicePageComponent } from './admin/admin-layout/admin-service-page/admin-service-page.component';
import { AdminServiceAddComponent } from './shared/components/admin-service-add/admin-service-add.component';
import { AdminServiceEditComponent } from './shared/components/admin-service-edit/admin-service-edit.component';
import { MainPopupComponent } from './shared/components/main-popup/main-popup.component';
import { ThanksPopupComponent } from './shared/components/thanks-popup/thanks-popup.component';
import { AdminCostPageComponent } from './admin/admin-layout/admin-cost-page/admin-cost-page.component';
import { AdminCostAddComponent } from './shared/components/admin-cost-add/admin-cost-add.component';


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
    GaleryPopupComponent,
    AdminGaleryPageComponent,
    AdminGaleryAddComponent,
    AdminServicePageComponent,
    AdminServiceAddComponent,
    AdminServiceEditComponent,
    MainPopupComponent,
    ThanksPopupComponent,
    AdminCostPageComponent,
    AdminCostAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
