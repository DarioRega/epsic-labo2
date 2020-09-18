import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  constructor() { }

  @Input()
  task: { id: number; title: string; };

  @Output() deleteTask = new EventEmitter<(number)>();

  ngOnInit(): void {
  }

  onDeleteTask(){
    this.deleteTask.emit(this.task.id);
  }

}
