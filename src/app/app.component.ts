import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  text_content:string = "";

  constructor(){}

  ngOnInit(){

  }

  ContentCheck(event: Event): void{
    console.log(event);
  }
}
