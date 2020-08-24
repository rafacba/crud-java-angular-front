import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styles: [
  ]
})
export class NuevoComponent implements OnInit {

  persona:Persona;

  constructor(private router:Router,
              private service: ServiceService) {
        this.persona = new Persona();
  }

  ngOnInit(): void {
  }

  guardar(nombre: string, apellido: string){
    this.persona.nombre = nombre;
    this.persona.apellido=apellido;
    // console.log(this.persona);
    this.service.createPersona(this.persona)
    .subscribe(data =>{
      console.log(data);
      alert("Se agrego con exito ...!!!");
      this.router.navigate(["listar"]);
    });
  }

}
