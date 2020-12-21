import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TaskModel } from '../task/models/task-component.model';
import { Status } from '../task/models/status.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  public newTaskForm: FormGroup;
  public aaa: string;
  public mockTasks: TaskModel[] = [
    {
      id: 1,
      title: 'TASK 1',
      status: Status.PENDING,
      description: 'description 1'
    },
    {
      id: 2,
      title: 'TASK 2',
      status: Status.PROGRESS,
      description: 'description 2'
    },
    {
      id: 3,
      title: 'TASK 3',
      status: Status.FINISH,
      description: 'El América de Cali S. A. —en forma abreviada: América de Cali o portantes en Sudamérica'
    }
  ];

  constructor() {}

  ngOnInit() {
    this.newTaskForm = new FormGroup({
      status: new FormControl(''),
      description: new FormControl(''),
    });
  }

  public newTask() {
    console.log('New Task');
    console.log(this.newTaskForm.controls.status.value);
    console.log(this.newTaskForm.controls.description.value);
  }
}
