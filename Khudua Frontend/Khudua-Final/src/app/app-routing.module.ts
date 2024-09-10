import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProductsOfferedComponent } from './pages/products-offered/products-offered.component';
import { ServicesOfferedComponent } from './pages/services-offered/services-offered.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const routes: Routes = [

  {path: 'home', component:HomePageComponent},
  {path: 'about', component:AboutUsComponent},
  {path: 'products', component:ProductsOfferedComponent},
  {path: 'services', component:ServicesOfferedComponent},
  {path: 'contact', component:ContactUsComponent  },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
