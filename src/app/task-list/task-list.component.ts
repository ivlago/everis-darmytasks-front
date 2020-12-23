import { Component, OnInit, NgModule, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TaskModel } from '../task/models/task-component.model';
import { Status } from '../task/models/status.model';
import { TaskControllerService } from '../services';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnDestroy {
  public newTaskForm: FormGroup;
  public editTaskForm: FormGroup;
  public status: Status[] = [Status.PROGRESS, Status.PENDING, Status.FINISH];
  public select: Status = Status.PENDING;
  public update: boolean = false;
  public taskList: any;
  public id: number;
  public task: TaskModel;

  private suscriptions = [];

  constructor(private taskService: TaskControllerService) {}

  ngOnInit() {
    this.getTasks();

    this.newTaskForm = new FormGroup({
      description: new FormControl(''),
    });

    this.editTaskForm = new FormGroup({
      updateDesc: new FormControl(''),
    });
  }

  public getTasks() {
    const taskSubs = this.taskService.findAllTask().subscribe(
        value => {
         this.taskList = value;
        }, err => {
          console.log(err);
    });
    this.suscriptions.push(taskSubs);
  }

  public newTask() {
    const newTask: TaskModel = {
      title: 'Title',
      status: this.select,
      description: this.newTaskForm.controls.description.value
    };
    this.taskService.saveTask(newTask).subscribe(
      value => {
        this.getTasks();
      }
    );
  }

  public deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(
      () => {
        this.getTasks();
      }
    );
  }

  public findTask(id: number) {
    this.update = true;
    this.id = id;
    this.taskService.findTaskById(this.id).subscribe(
      value => {
        this.task = value;
        this.select = value.status;
      }
    );
  }

  public editTask() {
    const updateDesc = this.editTaskForm.controls.updateDesc.value;
    const newTask: TaskModel = {
      id: this.id,
      title: 'Title' + this.id,
      status: this.select,
      description: updateDesc !== '' ? updateDesc : this.task.description
    };
    this.taskService.updateTask(newTask, this.id).subscribe(
      value => {
        this.getTasks();
      }
    );
  }

  ngOnDestroy() {
    if (this.suscriptions.length > 0) {
      this.suscriptions.forEach((subscription) => {
        subscription.unsubscribe();
      });
    }
  }
}
