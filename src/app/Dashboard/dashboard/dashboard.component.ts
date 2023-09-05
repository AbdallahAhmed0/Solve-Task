import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  graph: boolean = true; // Default to 'TODAY' being active
  list: boolean = false;

  constructor(){
  }

  toggleActive(button: string): void {
    this.graph = button === 'graph';
    this.list = button === 'list';
  }

}
