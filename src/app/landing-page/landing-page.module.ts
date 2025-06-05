import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { DialogModule } from '../dialog/dialog.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingPageComponent } from './landing-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DialogModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    NgIf,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    DialogModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    NgIf,
    MatInputModule,
    ReactiveFormsModule,
  ],
})
export class LandingPageModule {}
