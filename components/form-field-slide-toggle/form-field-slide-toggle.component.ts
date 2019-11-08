import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {MatSlideToggleChange} from '@angular/material';

@Component({
  selector: 'wt-form-field-slide-toggle',
  templateUrl: './form-field-slide-toggle.component.html',
  styleUrls: ['./form-field-slide-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFieldSlideToggleComponent {
  @Input() title: string;
  @Input() value: boolean;
  @Input() field: string;
  @Input() require = false;
  @Output() changeField = new EventEmitter<{ value: boolean, field: string }>();

  changeFieldHandler(e: MatSlideToggleChange) {
    this.changeField.emit({value: e.checked, field: this.field});
  }
}
