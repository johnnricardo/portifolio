import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PersonalPageComponent } from './personal-page.component';
import createSpyObj = jasmine.createSpyObj;
import {Clipboard} from "@angular/cdk/clipboard"

describe('PersonalPageComponent', () => {
  let component: PersonalPageComponent;
  let fixture: ComponentFixture<PersonalPageComponent>;
  const clipboardSpy = createSpyObj<Clipboard>('Clipboard', ['copy']);

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [PersonalPageComponent],
      providers: [{provide: Clipboard, useValue: clipboardSpy}]
    });
    fixture = TestBed.createComponent(PersonalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) should OnInit emailMessage = joaoricardomoura99@gmail.com', () => {
    expect(component.emailMessage).toEqual('joaoricardomoura99@gmail.com')
  })

  it('(U) changeMessageMouseEnter(): should emailMessage = Clique para copiar', () => {
    component.changeMessageMouseEnter()
    expect(component.emailMessage).toEqual('Clique para copiar')
  });

  it('(U) changeMessageMouseOut(): should emailMessage = joaoricardomoura99@gmail.com', () => {
    component.changeMessageMouseOut()
    expect(component.emailMessage).toEqual('joaoricardomoura99@gmail.com')
  });

  it('(U) emailCopy(): should copy joaoricardomoura99@gmail.com', async () => {
    await component.emailCopy()
    expect(clipboardSpy.copy).toHaveBeenCalledWith('joaoricardomoura99@gmail.com')
    
  });

  
});
