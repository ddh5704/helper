import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageModule } from './landing-page/landing-page.module';
import { LandingPageComponent } from './landing-page/landing-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'helper';
}
