import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Graph1Component } from './Dashboard/graph1/graph1.component';

const routes: Routes = [
  {path: 'graph', component:Graph1Component}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})

export class AppRoutingModule { }
