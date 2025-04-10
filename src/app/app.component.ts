import { Component } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis } from 'ng-apexcharts';
import { StatCardComponent } from './components/stat-card/stat-card.component';
import { CommonModule } from '@angular/common';
import { RevenueChartComponent } from './components/revenue-chart/revenue-chart.component';
import { TopProductsComponent } from './components/top-products/top-products.component';
import { RecentActivityComponent } from './components/recent-activity/recent-activity.component';
import { HeaderComponent } from './components/header/header.component';

interface StatCard {
  title: string;
  value: string;
  icon: string;
  percentage: string;
  iconBackgroundColor: string;
  iconTextColor: string;
  percentageColor: string;
  description: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    StatCardComponent,
    CommonModule,
    RevenueChartComponent,
    TopProductsComponent,
    RecentActivityComponent,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: [],
})
export class AppComponent {
  statCards: StatCard[] = [
    {
      title: 'Total Revenue',
      value: '$84,254.75',
      icon: 'trending_up',
      percentage: '+18.2%',
      iconBackgroundColor: 'bg-green-100',
      iconTextColor: 'text-green-600',
      percentageColor: 'text-green-600',
      description: 'vs last month',
    },
    {
      title: 'Total Users',
      value: '12,546',
      icon: 'person',
      percentage: '+11.3%',
      iconBackgroundColor: 'bg-primary-100',
      iconTextColor: 'text-primary-600',
      percentageColor: 'text-green-600',
      description: 'vs last month',
    },
    {
      title: 'Session Duration',
      value: '4m 32s',
      icon: 'timer',
      percentage: '-2.7%',
      iconBackgroundColor: 'bg-blue-100',
      iconTextColor: 'text-blue-600',
      percentageColor: 'text-red-600',
      description: 'vs last month',
    },
    {
      title: 'Bounce Rate',
      value: '42.8%',
      icon: 'call_missed_outgoing',
      percentage: '+3.1%',
      iconBackgroundColor: 'bg-amber-100',
      iconTextColor: 'text-amber-600',
      percentageColor: 'text-green-600',
      description: 'vs last month',
    },
  ];

  revenueSeries: ApexAxisChartSeries = [
    {
      name: 'Revenue',
      data: [
        28000, 30000, 29000, 35000, 32000, 37000, 39000, 40000, 44000, 46000,
        48000, 52000,
      ],
    },
    {
      name: 'Expenses',
      data: [
        14000, 15000, 14500, 16000, 16500, 17000, 18000, 19000, 19500, 20000,
        21000, 22000,
      ],
    },
  ];

  revenueChart: ApexChart = {
    type: 'line',
    height: 300,
  };

  revenueXAxis: ApexXAxis = {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
  };
}
