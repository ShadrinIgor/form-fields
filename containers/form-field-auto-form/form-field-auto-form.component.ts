import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input, OnChanges,
  OnInit,
  Output, SimpleChanges
} from '@angular/core';
import {FieldType} from '@wt/core/lib/components/form-field/form-field.component';

export interface IFormField{
  field: string;
  title: string;
  type: FieldType;
  value?: string | boolean;
  loading?: boolean;
  multiple?: boolean;
  require?: boolean;
  options?: {id: number; name: string}[];
}

@Component({
  selector: 'wt-form-field-auto-form',
  templateUrl: './form-field-auto-form.component.html',
  styleUrls: ['./form-field-auto-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFieldAutoFormComponent implements OnInit,  OnChanges {
  @Input() fields: IFormField[];
  @Input() state: any;
  @Input() formId: string;
  @Output() changeForm = new EventEmitter<{[field: string]: string}>();

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
}
