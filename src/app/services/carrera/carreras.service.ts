import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrera } from './carrera';
import { environment } from '../../../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CarrerasService {

  constructor(private readonly http:HttpClient) { }

  obtenerCarreras():Observable<Carrera[]>{
    return this.http.get<Carrera[]>(environment.urlApi+"/api/carrera")
  }
}
