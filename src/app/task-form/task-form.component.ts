// task-form.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
  public taskForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    status: [false],
  });

  constructor(
    private fb: FormBuilder,
    public taskService: TaskService, // Make taskService public if needed
    public route: ActivatedRoute,
    public router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const index = params['index'];
      if (index !== undefined) {
        const task = this.taskService.getTasks()[index];
        this.taskForm.patchValue(task);
      }
    });
  }

  onSubmit() {
    const formValue = this.taskForm.value;
    const index = this.route.snapshot.params['index'];
    if (!formValue.title || !formValue.description) {
      // Show Toastr error message and return from the function
      this.toastr.error('Title and Description are required.', 'Error', { positionClass: 'toast-top-right' });
      return;
    }

    if (index !== undefined) {
     
      this.taskService.editTask(index, formValue);
    } else {
     
      this.taskService.addTask(formValue);
    }

    this.router.navigate(['/tasks']);
  }
}
