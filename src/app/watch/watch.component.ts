import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent {
  @Input() hours!: number;
  @Input() minutes!: number;
  @Input() seconds!: number;

  ngOnChanges(changes: SimpleChanges) {
    this.seconds = changes["seconds"]?.currentValue || this.seconds;
    this.minutes = changes["minutes"]?.currentValue || this.minutes;
    this.hours = changes["hours"]?.currentValue || this.hours;
  }

}
