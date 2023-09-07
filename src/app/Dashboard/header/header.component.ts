import { Component,ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None // Set View Encapsulation to None

})
export class HeaderComponent {
  todayActive: boolean = true; // Default to 'TODAY' being active
  yesterdayActive: boolean = false;
  lastWeekActive: boolean = false;

  constructor(){
  }

  toggleActive(button: string): void {
    this.todayActive = button === 'today';
    this.yesterdayActive = button === 'yesterday';
    this.lastWeekActive = button === 'lastWeek';
  }

}
