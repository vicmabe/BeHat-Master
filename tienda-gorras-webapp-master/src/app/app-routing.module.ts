import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistroUsuariosScreenComponent } from './screens/registro-usuarios-screen/registro-usuarios-screen.component';
import { MujerScreenComponent } from './screens/mujer-screen/mujer-screen.component';
import { PromocionesScreenComponent } from './screens/promociones-screen/promociones-screen.component';
import { PromocioneshombreScreenComponent } from './screens/promocioneshombre-screen/promocioneshombre-screen.component';
import { PromocionesmujerScreenComponent } from './screens/promocionesmujer-screen/promocionesmujer-screen.component';
import { HombreScreenComponent } from './screens/hombre-screen/hombre-screen.component';
import { PagoScreenComponent } from './screens/pago-screen/pago-screen.component';
import { BusquedaScreenComponent } from './screens/busqueda-screen/busqueda-screen.component';

const routes: Routes = [
  { path: '', component: HomeScreenComponent,pathMatch: 'full'},
  { path: 'login', component: LoginScreenComponent,pathMatch: 'full'},
  { path: 'registro-usuarios', component: RegistroUsuariosScreenComponent,pathMatch: 'full'},
  { path: 'hombre', component: HombreScreenComponent,pathMatch: 'full'},
  { path: 'mujer', component: MujerScreenComponent,pathMatch: 'full'},
  { path: 'promociones', component: PromocionesScreenComponent,pathMatch: 'full'},
  { path: 'promociones-hombre', component: PromocioneshombreScreenComponent,pathMatch: 'full'},
  { path: 'promociones-mujer', component: PromocionesmujerScreenComponent,pathMatch: 'full'},
  { path: 'pago', component: PagoScreenComponent,pathMatch: 'full'},
  {path:  'busqueda', component: BusquedaScreenComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
