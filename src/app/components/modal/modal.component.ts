import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  isVisible = false;
  date: string = "";
  remark: string = "";

  @Output() continue = new EventEmitter<{ date: string, remark: string }>();
  @Output() cancel = new EventEmitter<void>();

  show() {
    this.isVisible = true;
  }

  hide() {
    this.isVisible = false;
  }

  onSubmit() {
    this.continue.emit({ date: this.date, remark: this.remark });
    this.hide();
  }

  onCancel() {
    this.cancel.emit();
    this.hide();
  }
}