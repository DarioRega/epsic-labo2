import {Component, Input, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.css']
})
export class RedComponent implements OnInit {
  counterId = 1;
  taskList: any[] = [
  ];

  @Input('title')
  title: string;
  constructor() { }

  ngOnInit(): void {
  }


  addTask() {
    this.taskList.push({
      id: this.counterId,
      name: 'name'
    });
    this.incrementId();
  }

  deleteTask(taskId: number) {
    this.taskList = this.taskList.filter((task) => task.id !== taskId);
  }

  incrementId(){
    this.counterId++;
  }

}
