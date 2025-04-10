import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stat-card',
  imports: [CommonModule],
  templateUrl: './stat-card.component.html',
  styleUrl: './stat-card.component.css',
})
export class StatCardComponent {
  @Input() title!: string;
  @Input() value!: string;
  @Input() icon!: string;
  @Input() iconBackgroundColor!: string;
  @Input() iconTextColor!: string;
  @Input() percentage!: string;
  @Input() percentageColor!: string;
  @Input() description: string = 'vs last month';
  @Input() timeframe: string = '';
}
