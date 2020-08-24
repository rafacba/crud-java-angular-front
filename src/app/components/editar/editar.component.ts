import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { Persona } from 'src/app/model/persona.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styles: [
  ]
})
export class EditarComponent implements OnInit {

  persona:Persona = new Persona();

  constructor(private router: Router,
              private service: ServiceService) { }

  ngOnInit() {
    this.editar();
  }

  editar(){
    let id= localStorage.getItem("id");
    this.service.getPersonaId(+id)
    .subscribe(data=>{
      console.log(data);
      this.persona=data;
    });

  }
  actualizar(f:NgForm){
    console.log(f);
    this.service.updatePersona(this.persona)
    .subscribe(data =>{
      this.persona=data;
      alert("Se actualizo con exito");
      this.router.navigate(["listar"]);
    });
  }

}
