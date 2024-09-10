import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { KhuduaComponent } from './pages/khudua/khudua.component';
import { ProductsOfferedComponent } from './pages/products-offered/products-offered.component';
import { ServicesOfferedComponent } from './pages/services-offered/services-offered.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    AboutUsComponent,
    HomePageComponent,
    KhuduaComponent,
    ProductsOfferedComponent,
    ServicesOfferedComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
