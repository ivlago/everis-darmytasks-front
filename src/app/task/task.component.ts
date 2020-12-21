import { Component, OnInit, Input } from '@angular/core';
import { TaskModel } from './models/task-component.model';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: TaskModel;

  constructor() { }

  ngOnInit() {
  }

}
