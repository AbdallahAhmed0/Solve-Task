import { Component } from '@angular/core';
import { ChartConfiguration} from 'chart.js';

@Component({
  selector: 'app-graph1',
  templateUrl: './graph1.component.html',
  styleUrls: ['./graph1.component.css']
})
export class Graph1Component {
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Station Name Dummy 1','Station Name Dummy 1',
     'Station Name Dummy 1','Station Name Dummy 1', 'Station Name Dummy 1', 'Station Name Dummy 1',
      'Station Name Dummy 1', 'Station Name Dummy 1'],
    datasets: [
      { data: [ 255, 145, 200,100,350,25, 245, 145], label: 'Series A' },
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

}
