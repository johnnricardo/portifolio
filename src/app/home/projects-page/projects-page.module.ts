import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexProjectComponent } from './pokedex-project/pokedex-project.component';
import { ToDoListProjectComponent } from './to-do-list-project/to-do-list-project.component';



@NgModule({
  declarations: [
    PokedexProjectComponent,
    ToDoListProjectComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokedexProjectComponent,
    ToDoListProjectComponent
  ]
})
export class ProjectsPageModule { }
