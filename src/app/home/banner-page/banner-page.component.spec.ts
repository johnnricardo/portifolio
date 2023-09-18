import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPageComponent } from './banner-page.component';

describe('BannerPageComponent', () => {
  let component: BannerPageComponent;
  let fixture: ComponentFixture<BannerPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerPageComponent]
    });
    fixture = TestBed.createComponent(BannerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) ngOnInit(): should call weekDaySwitch()', () => {
    const component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.weekDaySwitch).toBeTruthy();

  })


  it('(U) weekDaySwitch(): should case 0 be Domingo', () => {
    component.weekDaySwitch(0);
    expect(component.weekDay).toEqual('Domingo');
  });

  it('(U) weekDaySwitch(): should case 1 be Segunda', () => {
    component.weekDaySwitch(1);
    expect(component.weekDay).toEqual('Segunda-Feira');
  });

  it('(U) weekDaySwitch(): should case 2 be Terça-Feira', () => {
    component.weekDaySwitch(2);
    expect(component.weekDay).toEqual('Terça-Feira')
  });
  
  it('(U) weekDaySwitch(): should case 3 be Quarta-Feira', () => {
    component.weekDaySwitch(3);
    expect(component.weekDay).toEqual('Quarta-Feira');
  });

  it('(U) weekDaySwitch(): should case 4 be Quinta-Feira', () => {
    component.weekDaySwitch(4);
    expect(component.weekDay).toEqual('Quinta-Feira');
  });

  it('(U) weekDaySwitch(): should case 5 be Sexta-Feira', () => {
    component.weekDaySwitch(5);
    expect(component.weekDay).toEqual('Sexta-Feira');
  });

  it('(U) weekDaySwitch(): should case 6 be Sabado', () => {
    component.weekDaySwitch(6);
    expect(component.weekDay).toEqual('Sabado')
  })

  it('(U) setClass(): should effectClass be effect', () => {
    component.setClass();
    expect(component.effectClass).toEqual('effect')
  })

  it('(U) setOffClass(): should effectClass be normal', () => {
    component.setOffClass();
    expect(component.effectClass).toEqual('normal')
  })
});
