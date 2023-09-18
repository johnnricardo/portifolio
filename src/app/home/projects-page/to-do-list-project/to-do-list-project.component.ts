import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list-project',
  templateUrl: './to-do-list-project.component.html',
  styleUrls: ['./to-do-list-project.component.css']
})
export class ToDoListProjectComponent {

  public className: string = 'project-name'

  public setClass() {
    this.className = 'new-project-name'
  }

  public setOffClass() {
    this.className = 'project-name'
  }
}
