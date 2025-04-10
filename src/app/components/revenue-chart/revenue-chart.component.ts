import { Component, Input } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  NgApexchartsModule,
} from 'ng-apexcharts';

@Component({
  selector: 'app-revenue-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './revenue-chart.component.html',
  styleUrl: './revenue-chart.component.css',
})
export class RevenueChartComponent {
  @Input() series!: ApexAxisChartSeries;
  @Input() chart!: ApexChart;
  @Input() xaxis!: ApexXAxis;
}
