import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartOptions} from 'chart.js';

@Component({
  selector: 'app-graph1',
  templateUrl: './graph1.component.html',
  styleUrls: ['./graph1.component.css']
})
export class Graph1Component {
  public barChartLegend = true;
  public barChartData: ChartData<'bar'> = {
    labels: ['Station Name Dummy 1','Station Name Dummy 1', 'Station Name Dummy 2', 'Station Name Dummy 3', 'Station Name Dummy 4'],

    datasets: [
      {
        data: [255, 145, 200, 245,141],
        label: 'STATIONS ACTIVATES OVERVIEW',
        backgroundColor: '#FF7F5C',
        barPercentage: 0.5, // Adjust the width of the bars (0.5 means 50% of the available space)
        categoryPercentage: 0.18, // Adjust the space between bars (0.8 means 80% of the available space)
      },
    ],
  };

  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true, // Enable responsiveness
    maintainAspectRatio: false, // Prevent the chart from maintaining a fixed aspect ratio
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
  };
  }
