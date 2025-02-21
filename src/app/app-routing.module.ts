import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPersonasComponent } from './pages/lista-personas/lista-personas.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/registrar',
    pathMatch: 'full' }, 
  {
    path:"listaPersonas",
    component:ListaPersonasComponent
  },
  {
    path:"registrar",
    component:RegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
