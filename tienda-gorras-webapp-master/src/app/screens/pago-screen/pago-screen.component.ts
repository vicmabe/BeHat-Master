import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pago-screen',
  templateUrl: './pago-screen.component.html',
  styleUrls: ['./pago-screen.component.scss']
})
export class PagoScreenComponent implements OnInit {
  public paypal:any= {};
  public errors:any={};

  constructor(
    private router: Router
  ){

  }

  ngOnInit(): void {


  }

  //Para contraseñas
  public hide_1: boolean = false;
  public inputType_1: string = 'password';

  public pagar(){
    this.router.navigate([''])
  }
  //Funciones para password
  showPassword()
  {
    if(this.inputType_1 == 'password'){
      this.inputType_1 = 'text';
      this.hide_1 = true;
    }
    else{
      this.inputType_1 = 'password';
      this.hide_1 = false;
    }
  }

  public soloLetras(event: KeyboardEvent) {
    const charCode = event.key.charCodeAt(0);
    // Permitir solo letras (mayúsculas y minúsculas) y espacio
    if (
      !(charCode >= 65 && charCode <= 90) &&  // Letras mayúsculas
      !(charCode >= 97 && charCode <= 122) && // Letras minúsculas
      charCode !== 32                         // Espacio
    ) {
      event.preventDefault();
    }
  }
}
