import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PersonaService } from '../../services/persona/persona.service';
import { Persona } from '../../services/persona/persona';
import { Carrera } from '../../services/carrera/carrera';
import { CarrerasService } from '../../services/carrera/carreras.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent implements OnInit{

  carreras!:Carrera[]

  constructor(
    private readonly fb:FormBuilder,
    private readonly personaService:PersonaService,
    private readonly carrerasService:CarrerasService,
  ){}
    
  ngOnInit(): void {
    this.carrerasService.obtenerCarreras().subscribe({
      next:(carreras)=>{
        this.carreras = carreras
      }
    })
  }

  personaForm = this.fb.group({
    nombre:['',[Validators.required, Validators.pattern('^[A-Za-záéíóúÁÉÍÓÚñÑ]+$')]],
    apellido:['',[Validators.required, Validators.pattern('^[A-Za-záéíóúÁÉÍÓÚñÑ]+$')]],
    cedula:['',[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],
    email:['',[Validators.required, Validators.email]],
    celular:['',[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],
    carrera:['',[Validators.required]]
  })

  get nombre(){return this.personaForm.controls.nombre}

  get apellido(){return this.personaForm.controls.apellido}

  get cedula(){return this.personaForm.controls.cedula}

  get email(){return this.personaForm.controls.email}

  get celular(){return this.personaForm.controls.celular}

  get carrera(){return this.personaForm.controls.carrera}

  crearPersona(){
    if(this.personaForm.valid){
      this.personaService.crearPersona(this.personaForm.value as Persona).subscribe({
        next:()=>{
          alert("Persona registrada")
          this.personaForm.reset()
          this.personaForm.controls.carrera.setValue("")
        },
        error:()=>{
          alert("Ha ocurrido un error")
        }
      })
    }else{
      this.personaForm.markAllAsTouched()
    }
  }
}
