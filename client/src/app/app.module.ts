import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { environment as env } from '../environments/environment';
import { DressListComponent } from './dress-list/dress-list.component';
import { AddDressComponent } from './add-dress/add-dress.component';
import { HomeComponent } from './home/home.component';
import { RentExplanationComponent } from './rent-explanation/rent-explanation.component';
import { LeesExplanationComponent } from './lees-explanation/lees-explanation.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DressListComponent,
    AddDressComponent,
    HomeComponent,
    RentExplanationComponent,
    LeesExplanationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      ...env.auth,
      httpInterceptor: {
        ...env.httpInterceptor,
      },
    }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
