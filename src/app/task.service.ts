// task.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: any[] = [];
  tasks$ = new BehaviorSubject<any[]>(this.tasks);

  getTasks() {
    return this.tasks;
  }

  addTask(task: any) {
    this.tasks.push(task);
    this.tasks$.next(this.tasks);
  }

  editTask(index: number, task: any) {
    this.tasks[index] = task;
    this.tasks$.next(this.tasks);
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.tasks$.next(this.tasks);
  }
}
