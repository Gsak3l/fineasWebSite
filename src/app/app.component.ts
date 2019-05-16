import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 3000, noPause: false, showIndicators: true } }
  ]
})
export class AppComponent {
  title = 'fineasracingteam';
}
