import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-green',
  templateUrl: './green.component.html',
  styleUrls: ['./green.component.css']
})
export class GreenComponent implements OnInit {

  @Input('title')
  title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
