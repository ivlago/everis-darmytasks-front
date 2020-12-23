import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskModel } from './models/task-component.model';
import { Status } from './models/status.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: TaskModel;
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public deleteThisTask(id: number) {
    const confirmDelete = confirm('¿Estas seguro?');
    confirmDelete ? this.delete.emit(id) : null;
  }

  public editThisTask(id: number) {
    this.edit.emit(id);
  }
}
