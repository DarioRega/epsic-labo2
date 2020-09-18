import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blue',
  templateUrl: './blue.component.html',
  styleUrls: ['./blue.component.css']
})
export class BlueComponent implements OnInit {
  childrenComponentName = "orange";

  @Input('title')
  title: string;
  constructor() { }

  ngOnInit(): void {
  }

}
