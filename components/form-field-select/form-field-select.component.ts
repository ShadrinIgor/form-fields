import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'wt-form-field-select',
  templateUrl: './form-field-select.component.html',
  styleUrls: ['./form-field-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFieldSelectComponent {
  @Input() title: string;
  @Input() value: string | string[];
  @Input() field: string;
  @Input() multiple = false;
  @Input() require = false;
  @Input() options: { id: number | string; name: string }[];
  @Output() changeField = new EventEmitter<{ value: string, field: string }>();
  @Output() openedChange = new EventEmitter<{ value: string, field: string }>();

  changeFieldHandler(value) {
    this.changeField.emit({value, field: this.field});
  }

  openedChangeHandler(value) {
    this.openedChange.emit({value, field: this.field});
  }
}
