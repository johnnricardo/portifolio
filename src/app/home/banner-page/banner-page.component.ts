import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-page',
  templateUrl: './banner-page.component.html',
  styleUrls: ['./banner-page.component.css']
})
export class BannerPageComponent implements OnInit{

  public effectClass = 'normal'

  public actualDate = new Date()
  public dayNumber: number = this.actualDate.getDay();

  public weekDay: string = ''

  ngOnInit(): void {
    
    return this.weekDaySwitch(this.dayNumber)
  }

  public weekDaySwitch (dayNumber: number) {
    switch(dayNumber){
      case 0:
        this.weekDay = 'Domingo';
        break;
      case 1:
        this.weekDay = 'Segunda-Feira'
        break;
      case 2:
        this.weekDay = 'Terça-Feira';
        break;
      case 3: 
        this.weekDay = 'Quarta-Feira';
        break;
      case 4:
        this.weekDay = 'Quinta-Feira';
        break;
      case 5:
        this.weekDay = 'Sexta-Feira';
        break;
      case 6:
        this.weekDay = 'Sabado'
        break;
      default:
        this.weekDay = 'Hoje'
        break;
    }
  }

  public setClass(){
    this.effectClass = 'effect'
  }

  public setOffClass() {

    setTimeout(() => {
      this.effectClass = 'normal';
    }, 2000);

    
  }

}
