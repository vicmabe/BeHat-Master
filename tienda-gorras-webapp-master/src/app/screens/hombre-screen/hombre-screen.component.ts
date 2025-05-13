import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CarritoScreenComponent } from '../carrito-screen/carrito-screen.component';

@Component({
  selector: 'app-hombre-screen',
  templateUrl: './hombre-screen.component.html',
  styleUrls: ['./hombre-screen.component.scss']
})
export class HombreScreenComponent {

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
}
