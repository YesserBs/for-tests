import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  styleUrls: ['./user-type.component.css']
})
export class UserTypeComponent {
  @Input() isSelected: boolean = false;
  @Input() iconClass: string = '';
  @Input() titre: string = '';
  @Input() description: string = '';
  @Output() select = new EventEmitter<void>();

  onClick() {
    this.select.emit();
  }
}