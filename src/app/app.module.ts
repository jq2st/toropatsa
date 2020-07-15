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

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AdminNavComponent,
    AdminHeaderComponent,
    AdminLoginPageComponent,
    MainLayoutComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
