import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FocusMonitor } from '@angular/cdk/a11y';

import { LandingPageModule } from '../landing-page.module';
import { DialogModule } from '@angular/cdk/dialog';
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-registration-dialog',
  templateUrl: './registration-dialog.component.html',
  styleUrls: ['./registration-dialog.component.css'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [DialogModule, LandingPageModule],
})
export class RegistrationDialogComponent implements AfterViewInit {
  registrationForm: FormGroup;

  @ViewChild('emailInput') emailInput!: ElementRef;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<RegistrationDialogComponent>,
    private focusMonitor: FocusMonitor,
    private addressSvc: AddressService
  ) {
    this.registrationForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        zip: ['', [Validators.required]],
      },
      { validators: this.passwordsMatchValidator }
    );
  }

  ngAfterViewInit(): void {
    Promise.resolve().then(() => {
      this.focusMonitor.focusVia(this.emailInput, 'program');
    });
  }

  passwordsMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword && password?.length
      ? null
      : { passwordMismatch: true };
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      var address = this.addressSvc.getCityStateByZip(
        this.registrationForm.get('zip')?.value
      );
      delete this.registrationForm.value.confirmPassword;
      this.dialogRef.close({ ...this.registrationForm.value, ...address });
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
