import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { AboutPageComponent } from './main-layout/about-page/about-page.component';
import { ServicePageComponent } from './main-layout/service-page/service-page.component';
import { PricePageComponent } from './main-layout/price-page/price-page.component';
import { GaleryPageComponent } from './main-layout/galery-page/galery-page.component';
import { ContactPageComponent } from './main-layout/contact-page/contact-page.component';
import { AdminGaleryPageComponent } from './admin/admin-layout/admin-galery-page/admin-galery-page.component';
import { AdminLoginPageComponent } from './admin/admin-login-page/admin-login-page.component';
import { AuthGuard } from './services/auth.guard';
import { AdminServicePageComponent } from './admin/admin-layout/admin-service-page/admin-service-page.component';
import { AdminCostPageComponent } from './admin/admin-layout/admin-cost-page/admin-cost-page.component';


const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
    {path: '', component: AboutPageComponent},
    {path: 'service', component: ServicePageComponent},
    {path: 'price', component: PricePageComponent},
    {path: 'galery', component: GaleryPageComponent},
    {path: 'contact', component: ContactPageComponent},
  ]},
  {path: 'admin', children: [
    {path: '', redirectTo: '/admin/login', pathMatch: 'full'}, 
    {path: 'login', component: AdminLoginPageComponent}, 
    {path: 'dashboard',  component: AdminLayoutComponent, canActivate: [AuthGuard], children: [
      {path: 'cost', component: AdminCostPageComponent}, 
      {path: 'galery', component: AdminGaleryPageComponent}, 
      {path: 'service', component: AdminServicePageComponent},
    ]}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
