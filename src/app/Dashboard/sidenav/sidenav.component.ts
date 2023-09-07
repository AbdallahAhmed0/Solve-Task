import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  public radarChartOptions: ChartConfiguration<'radar'>['options'] = {
    responsive: false,
      layout: {
          padding: 2
  }
  };
  public radarChartLabels: string[] = ['24:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00',
                                        '14:00', '16:00', '18:00', '20:00', '22:00'];

  public radarChartDatasets: ChartConfiguration<'radar'>['data']['datasets'] = [
    {
    data: [18, 59, 90, 10, 56, 20, 40,28, 48, 75, 19,56],
    label: '' ,
    backgroundColor: '#009ACF33',
    borderColor:'#009ACF',

  },
    { data: [28, 48, 70, 19, 96, 27, 100, 81, 56, 55, 40,89],
    label: '',
    backgroundColor: '#009ACF33',
    borderColor:'#009ACF'}
  ];
}
