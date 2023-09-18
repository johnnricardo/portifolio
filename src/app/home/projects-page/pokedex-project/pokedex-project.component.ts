import { Component } from '@angular/core';

@Component({
  selector: 'app-pokedex-project',
  templateUrl: './pokedex-project.component.html',
  styleUrls: ['./pokedex-project.component.css']
})
export class PokedexProjectComponent {
  public projectNameClass = 'project-name'

  public setEffectClass() {
    this.projectNameClass = 'new-project-name'
  
  }

  public setOffEffectClass(){
    this.projectNameClass = 'project-name'
  }
}
