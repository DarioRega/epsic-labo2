import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-grey',
  templateUrl: './grey.component.html',
  styleUrls: ['./grey.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class GreyComponent implements OnInit {

  childrenComponentName = 'pink';

  @Input('title')
  title: string;
  constructor() { }

  ngOnInit(): void {
  }

}
