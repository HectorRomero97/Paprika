import { FirebaseService } from './firebase.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LandingComponent } from './landing/landing.component';
import { TablasComponent } from './tablas/tablas.component';
import { RegistroComponent } from './registro/registro.component';
import { OrdenComponent } from './orden/orden.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    LandingComponent,
    TablasComponent,
    RegistroComponent,
    OrdenComponent,
    ContactoComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyD90BeApb56X15znNxhSRU1O_i77lyZLew",
      authDomain: "mdb-angular-free-65ef3.firebaseapp.com",
      databaseURL: "https://mdb-angular-free-65ef3.firebaseio.com",
      projectId: "mdb-angular-free-65ef3",
      storageBucket: "mdb-angular-free-65ef3.appspot.com",
      messagingSenderId: "885547832138",
      appId: "1:885547832138:web:4d9ec0dda4635c9a7127b3"
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
