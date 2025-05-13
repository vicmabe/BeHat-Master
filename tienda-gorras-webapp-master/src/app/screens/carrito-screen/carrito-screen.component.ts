import { Component, EventEmitter, Input, OnInit, Optional, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito-screen',
  templateUrl: './carrito-screen.component.html',
  styleUrls: ['./carrito-screen.component.scss']
})
export class CarritoScreenComponent implements OnInit {

  cantidadGH1: number = 1;
  cantidadGH5: number = 1;

  constructor(
    @Optional() private  dialogRef: MatDialogRef<CarritoScreenComponent>,
    private router: Router
  ){}

  ngOnInit(): void {

  }
  public comprarProducto() {
    if (this.dialogRef) {
      this.dialogRef.close({ isBuy: true });
    }
    this.router.navigate(['pago']);
  }

  public cerrar_modal() {
    if (this.dialogRef) {
      this.dialogRef.close({ isBuy: false });
    }
  }


sumarCantidad(producto: string) {
  if (producto === 'GH1') {
    this.cantidadGH1++;
  } else if (producto === 'GH5') {
    this.cantidadGH5++;
  }
}

restarCantidad(producto: string) {
  if (producto === 'GH1' && this.cantidadGH1 > 1) {
    this.cantidadGH1--;
  } else if (producto === 'GH5' && this.cantidadGH5 > 1) {
    this.cantidadGH5--;
  }
}

}
