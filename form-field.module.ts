import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSlideToggleModule
} from '@angular/material';
import {NgrxFormsModule} from 'ngrx-forms';
import {AngularEditorModule} from '@kolkov/angular-editor';
import {FormsModule} from '@angular/forms';

import {FormFieldComponent} from '@wt/core/lib/components/form-field/form-field.component';
import {FormFieldErrorModule} from '@wt/core/lib/components/form-field-error/form-field-error.module';
import {SpinnerModule} from '@wt/core/lib/components/spinner/spinner.module';
import { FormFieldSpinnerComponent } from './components/form-field-spinner/form-field-spinner.component';
import { FormFieldSelectComponent } from './components/form-field-select/form-field-select.component';
import { FormFieldSlideToggleComponent } from './components/form-field-slide-toggle/form-field-slide-toggle.component';
import { FormFieldAutoFormComponent, IField } from './containers/form-field-auto-form/form-field-auto-form.component';

@NgModule({
  declarations: [FormFieldComponent, FormFieldSpinnerComponent, FormFieldSelectComponent, FormFieldSlideToggleComponent, FormFieldAutoFormComponent],
  imports: [
    CommonModule,
    FormFieldErrorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSelectModule,
    NgrxFormsModule,
    AngularEditorModule,
    FormsModule,
    SpinnerModule
  ],
  exports: [FormFieldComponent, FormFieldAutoFormComponent]
})
export class FormFieldModule { }
