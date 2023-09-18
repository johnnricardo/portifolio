import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  public questionClass: string = 'question'

  ngOnInit(): void {
    return this.effectComponent()
    
  }

  public effectComponent() {
     
  setInterval(() => {
      setTimeout (() => {
        this.questionClass = 'new-question'
      }, 100)

      setTimeout (() => {
        this.questionClass = 'question'
      }, 250)

      setTimeout (() => {
        this.questionClass = 'new-question'
      }, 350)

      setTimeout (() => {
        this.questionClass = 'question'
      }, 550)

    }, 2000);

  }
}
