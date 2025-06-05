import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgIf } from '@angular/common';
import { LandingPageModule } from '../landing-page.module';
import { DialogModule } from '../../dialog/dialog.module';

@Component({
  selector: 'app-reset-password-dialog',
  templateUrl: './reset-password-dialog.component.html',
  styleUrls: ['./reset-password-dialog.component.css'],
  standalone: true,
  imports: [
    DialogModule,
    // MatFormFieldModule,
    // FormsModule,
    // ReactiveFormsModule,
    // NgIf,
    LandingPageModule,
  ],
})
export class ResetPasswordDialogComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ResetPasswordDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { email: string }
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get email(): any {
    return this.form.get('email')!;
  }

  onCancelClick(): void {
    this.dialogRef.close(null);
  }

  onResetClick(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value.email);
    }
  }
}
