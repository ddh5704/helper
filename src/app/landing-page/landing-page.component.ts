import { Component } from '@angular/core';
import { take } from 'rxjs';
import { EmailPasswordDialogComponent } from './login';
import { RegistrationDialogComponent } from './register';
import { ResetPasswordDialogComponent } from './reset';
import { MatDialog } from '@angular/material/dialog';
import { LandingPageModule } from './landing-page.module';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  standalone: true,
  imports: [LandingPageModule],
})
export class LandingPageComponent {
  constructor(private dialog: MatDialog) {}
  onLoginClick() {
    var popup = this.dialog.open(EmailPasswordDialogComponent, {
      disableClose: true,
      width: '300px',
    });

    popup
      .afterClosed()
      .pipe(take(1))
      .subscribe({
        next: (result) => {
          if (result) {
            if (result.reset) {
              this.showReset(result);
            } else {
              console.error('login: ', result);
            }
          } else {
            console.error('cancelled');
          }
        },
      });
  }

  onRegistrationClick() {
    var popup = this.dialog.open(RegistrationDialogComponent, {
      width: '400px',
    });

    popup
      .afterClosed()
      .pipe(take(1))
      .subscribe({
        next: (result) => {
          if (result) {
            if (result.reset) {
              this.showReset(result);
            } else {
              console.error('login: ', result);
            }
          } else {
            console.error('cancelled');
          }
        },
      });
  }

  onLogoClick() {
    window.open('https://www.mockingbird-software.com', '_blank');
  }

  private showReset(result?: any): void {
    var popup = this.dialog.open(ResetPasswordDialogComponent, {
      width: '300px',
    });

    popup
      .afterClosed()
      .pipe(take(1))
      .subscribe({
        next: (result) => {
          if (result) {
            if (result.reset) {
              this.showReset(result);
            } else {
              console.error('login: ', result);
            }
          } else {
            console.error('cancelled');
          }
        },
      });
  }
}
