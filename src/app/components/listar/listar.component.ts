import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styles: [
  ]
})
export class ListarComponent implements OnInit {

  personas: Persona[];

  constructor(private service: ServiceService,
              private router: Router) { }

  ngOnInit() {
    this.service.getPersonas()
    .subscribe(data => {
        this.personas = data;
        console.log(data);
    });
  }

  editar(persona:Persona){
    localStorage.setItem("id", persona.id.toString());
    this.router.navigate(["editar"]);
  }

  borrar(persona:Persona){
    this.service.deletePersona(persona)
    .subscribe(data => {
      this.personas=this.personas.filter(p=>p!==persona);
      alert("Usuario eliminado");
    });
  }



}
