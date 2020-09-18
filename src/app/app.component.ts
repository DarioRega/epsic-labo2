import {Component, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'labo2';
  sections = {
    green: 'green',
    pink: 'pink',
    red: 'red',
    orange: 'orange',
    gray: 'gray',
    blue: 'blue',
  };


}
