import { Component } from '@angular/core';
import {Clipboard} from "@angular/cdk/clipboard"

@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.css']
})
export class PersonalPageComponent {


  constructor (private clipboard: Clipboard) {}

  public emailMessage: string = 'joaoricardomoura99@gmail.com'
  public copy: any

  public changeMessageMouseEnter() {
    this.emailMessage = 'Clique para copiar'
  }
  
  public changeMessageMouseOut() {
    this.emailMessage = 'joaoricardomoura99@gmail.com'
  }

  public async emailCopy () {

    this.emailMessage = 'Email Copiado!'
    this.clipboard.copy('joaoricardomoura99@gmail.com');

  
    }

}
