import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-pink',
  templateUrl: './pink.component.html',
  styleUrls: ['./pink.component.css'],

})
export class PinkComponent implements OnInit {
  @Input('index')
  index: number;

  @Input('childTitle')
  childTitle: string;
  constructor() { }

  ngOnInit(): void {
  }

}
