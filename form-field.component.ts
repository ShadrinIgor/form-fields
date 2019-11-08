import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {FormsFacade, UpdateFormPayload} from '@wt/core/lib/+state/forms';

export type FieldType =
  'input' |
  'select' |
  'select-multiple' |
  'slide-toggle' |
  'textarea';

export interface IFormFieldOption {
  id: number;
  name: string;
}

export const FieldTypeInput = 'input';
export const FieldTypeSelect = 'select';
export const FieldTypeSelectMultiple = 'select-multiple';
export const FieldTypeSlideToggle = 'slide-toggle';
export const FieldTypeTextarea = 'textarea';

@Component({
  selector: 'wt-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFieldComponent implements OnInit, OnChanges {
  @Input() title: string;
  @Input() type: FieldType;
  @Input() field: string;
  @Input() loading: boolean;
  @Input() formId: string;
  @Input() state: any;
  @Input() options: IFormFieldOption[] = [];
  @Input() isRequired = false;

  modelControl: string | boolean = '';
  stateControl;

  constructor(private formsFacade: FormsFacade) {
  }

  ngOnInit() {
    if (this.state.controls && this.state.controls[this.field] && this.state.controls[this.field].value) {
      this.modelControl = this.state.controls[this.field].value;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.state.currentValue) {
      this.stateControl = changes.state.currentValue['controls'][this.field];
    }
  }

  changeField({value, field}) {
    this.modelControl = value;
    const params: UpdateFormPayload = {
      formId: this.formId,
      field,
      value
    };
    this.formsFacade.updateForm(params);
  }

  editorChange(description: string) {
    this.changeField({value: description, field: this.field});
  }

  sendAction(field, action) {
    const params = {
      formId: this.formId,
      field: this.field,
      action
    };

    this.formsFacade.sendAction(params);
  }

  openedChange({value, field}) {
    if (!value && (
      (!Array.isArray(this.modelControl) && !this.modelControl) ||
      (Array.isArray(this.modelControl) && !this.modelControl.length)
    )) {
      this.sendAction(field, 'MARK_AS_TOUCHED');
    }
  }
}
