// delete-confirmation.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css'],
})
export class DeleteConfirmationComponent {
  @Input() isVisible: boolean = false;
  @Output() cancel = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  onCancelClick(): void {
    this.cancel.emit();
  }

  onDeleteClick(): void {
    this.delete.emit();
  }
}
