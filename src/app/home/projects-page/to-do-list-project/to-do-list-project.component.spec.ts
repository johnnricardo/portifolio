import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListProjectComponent } from './to-do-list-project.component';

describe('ToDoListProjectComponent', () => {
  let component: ToDoListProjectComponent;
  let fixture: ComponentFixture<ToDoListProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoListProjectComponent]
    });
    fixture = TestBed.createComponent(ToDoListProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) setClass(): should className = new-project-name', () => {
    component.setClass();
    expect(component.className).toEqual('new-project-name');
  })

  it('(U) setOffClass(): should clasName = project-name', () => {
    component.setOffClass();
    expect(component.className).toEqual('project-name')
  })
});
