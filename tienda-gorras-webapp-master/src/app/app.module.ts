import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//Angular material
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
//Cambia el idioma a español
import { MAT_DATE_LOCALE } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistroUsuariosScreenComponent } from './screens/registro-usuarios-screen/registro-usuarios-screen.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { MujerScreenComponent } from './screens/mujer-screen/mujer-screen.component';
import { HombreScreenComponent } from './screens/hombre-screen/hombre-screen.component';
import { PromocionesScreenComponent } from './screens/promociones-screen/promociones-screen.component';
import { PromocioneshombreScreenComponent } from './screens/promocioneshombre-screen/promocioneshombre-screen.component';
import { PromocionesmujerScreenComponent } from './screens/promocionesmujer-screen/promocionesmujer-screen.component';
import { CarritoScreenComponent } from './screens/carrito-screen/carrito-screen.component';
import { PagoScreenComponent } from './screens/pago-screen/pago-screen.component';
import { BusquedaScreenComponent } from './screens/busqueda-screen/busqueda-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    HomeScreenComponent,
    RegistroUsuariosScreenComponent,
    NavbarComponent,
    MujerScreenComponent,
    HombreScreenComponent,
    PromocionesScreenComponent,
    PromocioneshombreScreenComponent,
    PromocionesmujerScreenComponent,
    CarritoScreenComponent,
    PagoScreenComponent,
    BusquedaScreenComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatRadioModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule


  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-ES'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
