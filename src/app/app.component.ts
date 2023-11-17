import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'stopwatch';
  hours: number = 0;
  minutes: number = 59;
  seconds: number = 55;
  isPaused: Boolean = true;
  isStopped: Boolean = true;

  ngOnInit() {
    // console.log("oninit")
    setInterval(() => this.incrementSeconds(), 1000);
  }

  startStop = () => {
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.isStopped = !this.isStopped
    this.isPaused = this.isStopped ? true: false;
  };

  incrementSeconds = () => {
    console.log('Increment called');
    if (!this.isPaused && !this.isStopped) {
      if (this.minutes == 59 && this.seconds == 59) {
        this.seconds = 0;
        this.minutes = 0;
        this.hours++;
      } else if (this.seconds == 59) {
        this.seconds = 0;
        this.minutes++;
      } else {
        this.seconds++;
      }
    }
  };
}
