import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from './persona';
import { environment } from '../../../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private readonly http:HttpClient) { }

  crearPersona(persona:Persona):Observable<Persona>{
    return this.http.post<Persona>(environment.urlApi+"/api/persona",persona);
  }

  obtenerPersonasRegistradas():Observable<Persona[]>{
    return this.http.get<Persona[]>(environment.urlApi+"/api/persona")
  }
}
