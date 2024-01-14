import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  isDeleteModalVisible: boolean = false;
  tasks: Task[] = [];
  taskToDeleteIndex: number | null = null;

  @ViewChild('deleteConfirmationModal') deleteConfirmationModal: any;

  constructor(private taskService: TaskService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.taskService.tasks$.subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  showDeleteModal(index: number): void {
    this.taskToDeleteIndex = index;
    this.isDeleteModalVisible = true;
  }

  hideDeleteModal(): void {
    this.isDeleteModalVisible = false;
  }

  onDelete(): void {
    if (this.taskToDeleteIndex !== null) {
      this.taskService.deleteTask(this.taskToDeleteIndex);
      this.hideDeleteModal(); // Close the modal after deletion
    }
  }
}
