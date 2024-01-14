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

  toggleCompletionStatus(index: number): void {
    // Assuming 'tasks' is the array of tasks
    const task = this.tasks[index];
    
    // Toggle completion status
    task.completed = !task.completed;
  
    // Modify title and description based on completion status
    if (task.completed) {
      task.title = `Marked: ${task.title}`;
      task.description = `Completed: ${task.description}`;
    } else {
      // Reset title and description to their original values
      task.title = task.title.replace(/^Marked: /, '');
      task.description = task.description.replace(/^Completed: /, '');
    }
  
    // Update the tasks array
    this.taskService.editTask(index, task);
  }
  
}
