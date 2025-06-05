import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogTitleComponent } from './dialog-title/dialog-title.component';
import { DialogActionsComponent } from './dialog-actions/dialog-actions.component';

import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [DialogTitleComponent, DialogActionsComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  exports: [DialogTitleComponent, DialogActionsComponent],
})
export class DialogModule {}
