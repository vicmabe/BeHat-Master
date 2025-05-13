import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CarritoScreenComponent } from 'src/app/screens/carrito-screen/carrito-screen.component';
import { BusquedaScreenComponent } from 'src/app/screens/busqueda-screen/busqueda-screen.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(
    public dialog: MatDialog
  ){}


  openModal() {
    const dialogRef = this.dialog.open(CarritoScreenComponent,{
      //data: {id: idUser, rol: 'administrador'}, //Se pasan valores a través del componente
      height: '90%',
      width: '30%',
      panelClass: 'custom-dialog',
      position: { top: '50px', right: '30px' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.isBuy){
        console.log("Admin eliminado");
        //Recargar página
        window.location.reload();
      }else{
        alert("Administrador no eliminado ");
        console.log("No se eliminó el admin");
      }
    });
  }
   abrirModal(){
    this.dialog.open(BusquedaScreenComponent, {
     height: '90%',
      width: '30%',
      data: { mensaje: 'Ejemplo de modal' } // Puedes pasar datos si es necesario
    });
  }
}


