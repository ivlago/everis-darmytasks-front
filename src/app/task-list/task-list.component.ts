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
  public delete: boolean;
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
      description: 'Un texto es una composición de signos codificados en un sistema de escritura que forma una unidad de sentido. También es una composición de caracteres imprimibles generados por un algoritmo de cifrado que, aunque no tienen sentido para cualquier persona, sí puede ser descifrado por su destinatario original.'
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
    const description: Status = this.newTaskForm.controls.description.value;
    const newTask: TaskModel = {
      id: 34151,
      status: this.newTaskForm.controls.status.value,
      description: description
    }
    this.mockTasks.push(newTask);
  }

  public deleteTask(id: number) {
    this.mockTasks = this.mockTasks.filter(task => task.id !== id);
  }
}
