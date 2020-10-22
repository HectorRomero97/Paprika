import { ContactoComponent } from './contacto/contacto.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { OrdenComponent } from './orden/orden.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'orden', component: OrdenComponent },
  { path: 'contacto', component: ContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
