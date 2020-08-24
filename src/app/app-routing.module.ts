import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './components/listar/listar.component';
import { NuevoComponent } from './components/nuevo/nuevo.component';
import { EditarComponent } from './components/editar/editar.component';


const ROUTES: Routes = [
  {path: 'listar', component: ListarComponent},
  {path: 'nuevo' , component: NuevoComponent},
  {path: 'editar', component: EditarComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'nuevo'},
  {path: '', pathMatch: 'full', redirectTo: 'nuevo'}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
