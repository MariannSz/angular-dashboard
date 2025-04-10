import { Component } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis } from 'ng-apexcharts';
import { StatCardComponent } from './components/stat-card/stat-card.component';
import { CommonModule } from '@angular/common';
import { RevenueChartComponent } from './components/revenue-chart/revenue-chart.component';
import { TopProductsComponent } from './components/top-products/top-products.component';
import { RecentActivityComponent } from './components/recent-activity/recent-activity.component';

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
