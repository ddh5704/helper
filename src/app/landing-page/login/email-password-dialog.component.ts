import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgIf } from '@angular/common';
import { LandingPageModule } from '../landing-page.module';
import { DialogModule } from '../../dialog/dialog.module';

@Component({
  selector: 'app-email-password-dialog',
  templateUrl: './email-password-dialog.component.html',
  styleUrls: ['./email-password-dialog.component.scss'],
  standalone: true,
  imports: [DialogModule, LandingPageModule],
})
export class EmailPasswordDialogComponent {
  @Output() cancel = new EventEmitter();
  @Output() login = new EventEmitter();

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EmailPasswordDialogComponent>
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close(null);
  }

  onForgotPassword() {
    var email = this.form.get('email');
    this.dialogRef.close({
      reset: true,
      isValid: email?.valid,
      email: email?.value,
    });
  }
}
