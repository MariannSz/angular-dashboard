import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexAxisChartSeries, ApexChart, ApexXAxis } from 'ng-apexcharts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './app.component.html',
  styleUrls: [],
})
export class AppComponent {
  revenueSeries: ApexAxisChartSeries = [
    {
      name: 'Revenue',
      data: [45000, 47000, 52000, 58000, 63000, 70000],
    },
    {
      name: 'Expenses',
      data: [20000, 23000, 25000, 30000, 34000, 39000],
    },
  ];

  revenueChart: ApexChart = {
    type: 'line',
    height: 300,
  };

  revenueXAxis: ApexXAxis = {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  };
}
