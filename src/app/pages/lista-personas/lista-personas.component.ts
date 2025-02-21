import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona/persona.service';
import { Persona } from '../../services/persona/persona';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrl: './lista-personas.component.css'
})
export class ListaPersonasComponent implements OnInit {
  
  constructor(private readonly personaService:PersonaService){}
  
  personas!:Persona[]
  
  ngOnInit(): void {
    this.personaService.obtenerPersonasRegistradas().subscribe({
      next:(personas)=>{
        this.personas = personas
        console.log(this.personas)
      },
      error:()=>{
        alert("No se han podido cargar los fatos")
      }
    })
  }


}
