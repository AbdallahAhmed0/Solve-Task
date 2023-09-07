import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  public radarChartOptions: ChartOptions<'radar'> = {
    responsive: false,
    scales: {
      r: {
        max: 100, // Set the maximum value for the radar chart
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend if not needed
      },
    },
    elements: {
      point: {
        radius: 0, // Set the point radius to 0 to make them invisible
        borderWidth: 0, // Set the point border width to 0
      },
    },
  };

  public radarChartLabels: string[] = ['24:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00',
                                        '14:00', '16:00', '18:00', '20:00', '22:00'];

  public radarChartDatasets: ChartConfiguration<'radar'>['data']['datasets'] = [
    {
    data: [80, 59, 90, 10, 56, 20, 40,28, 48, 75,90,85],
    label: '' ,
    backgroundColor: '#009ACF33',
    borderColor:'#009ACF',

  },
    { data: [28, 48, 70, 19, 96, 100, 81, 56, 55, 40,55,89],
    label: '',
    backgroundColor: '#009ACF33',
    borderColor:'#009ACF'}
  ];

}
