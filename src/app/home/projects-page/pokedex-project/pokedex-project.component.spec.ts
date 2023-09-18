import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexProjectComponent } from './pokedex-project.component';

describe('PokedexProjectComponent', () => {
  let component: PokedexProjectComponent;
  let fixture: ComponentFixture<PokedexProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokedexProjectComponent]
    });
    fixture = TestBed.createComponent(PokedexProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) setEffectClass(): should projectNameClass = new-project-name', () => {
    component.setEffectClass();
    expect(component.projectNameClass).toEqual('new-project-name');
  });

  it('(U) setOffEffectClass(): should projectNameClass = project-name', () => {
    component.setOffEffectClass();
    expect(component.projectNameClass).toEqual('project-name');
  })
});
