import { Component, EventEmitter, Input, OnInit, Optional, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-busqueda-screen',
  templateUrl: './busqueda-screen.component.html',
  styleUrls: ['./busqueda-screen.component.scss']
})
export class BusquedaScreenComponent implements OnInit {
  searchTerm: string = '';
  productos = [
    { nombre: 'Los Angeles Dodgers MLB Gold Collection ' , image: "../../../assets/images/GH1.png" },
    { nombre: 'New York Yankees MLB Armed Forces'        , image: "../../../assets/images/GH2.png" },
    { nombre: 'MLB All Over 59FIFTY Cerrada'             , image: "../../../assets/images/GH3.png" },
    { nombre: 'New York Yankees Purple Logo MLB'         , image: "../../../assets/images/GH4.png" },
    { nombre: 'Los Angeles Dodgers MLB Clubhouse'        , image: "../../../assets/images/GH5.png" },
    { nombre: 'New York Yankees MLB Classics'            , image: "../../../assets/images/GH6.png" },
    { nombre: 'Boston Red Sox MLB Hand Stitched Floral'  , image: "../../../assets/images/GH7.png" },
    { nombre: 'Brooklyn Dodgers MLB Jackie Robinson Day' , image: "../../../assets/images/GH8.png" },
    { nombre: 'New York Yankees MLB Color Pack'          , image: "../../../assets/images/GH9.png" },
    { nombre: 'New York Yankees J-Frost X MLB'           , image: "../../../assets/images/GH10.png"},

  ]; // Lista de productos disponibles
  productosFiltrados: any[] = [];

  ngOnInit(): void {
    this.productosFiltrados = [...this.productos]; // Inicializar lista de productos
    console.log('Lista de productos:', this.productosFiltrados);
  }
    filtrarProductos() {
    this.productosFiltrados = this.productos.filter(producto =>
      producto.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}


