import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexAxisChartSeries, ApexChart, ApexXAxis } from 'ng-apexcharts';
import { StatCardComponent } from './components/stat-card/stat-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgApexchartsModule, StatCardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: [],
})
export class AppComponent {
  statCards = [
    {
      title: 'Total Revenue',
      value: '$84,254.75',
      icon: 'trending_up',
      percentage: '+18.2%',
      timeframe: 'vs last month',
      iconBackgroundColor: 'bg-green-100',
      iconTextColor: 'text-green-600',
      percentageColor: 'text-green-600',
    },
    {
      title: 'Total Users',
      value: '12,546',
      icon: 'person',
      percentage: '+11.3%',
      timeframe: 'vs last month',
      iconBackgroundColor: 'bg-primary-100',
      iconTextColor: 'text-primary-600',
      percentageColor: 'text-green-600',
    },
    {
      title: 'Session Duration',
      value: '4m 32s',
      icon: 'timer',
      percentage: '-2.7%',
      timeframe: 'vs last month',
      iconBackgroundColor: 'bg-blue-100',
      iconTextColor: 'text-blue-600',
      percentageColor: 'text-red-600',
    },
    {
      title: 'Bounce Rate',
      value: '42.8%',
      icon: 'call_missed_outgoing',
      percentage: '+3.1%',
      timeframe: 'vs last month',
      iconBackgroundColor: 'bg-amber-100',
      iconTextColor: 'text-amber-600',
      percentageColor: 'text-green-600',
    },
  ];

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
