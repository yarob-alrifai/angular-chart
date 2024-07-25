import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ApiService } from '../../services/api.service';
import { Sale } from '../../models/sale';
Chart.register(...registerables);
@Component({
  selector: 'app-chart-bubble',
  templateUrl: './chart-bubble.component.html',
  styleUrl: './chart-bubble.component.css',
})
export class ChartBubbleComponent implements OnInit {
  chartdata: Sale[] = [];
  labeldata: any[] = [];
  realdata: any[] = [];
  colordata: any[] = [];
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.loadSale();
  }
  loadSale() {
    this.api.loadSales().subscribe((data) => {
      this.chartdata = data;
      if (this.chartdata != null) {
        this.chartdata.map((item) => {
          this.labeldata.push(item.year);
          this.colordata.push(item.colorCode);
          this.realdata.push(item.amount);
        });
        this.renderChart(
          this.labeldata,
          this.realdata,
          this.colordata,
          'doughnutchart',
          'bubble'
        );
      }
    });
  }

  renderChart(
    labeldata: number[],
    realdata: number[],
    colorCode: string[],
    charId: string,
    chartType: any
  ) {
    const myChart = new Chart(charId, {
      type: chartType,
      data: {
        // labels: labeldata,
        datasets: [
          {
            label: 'Sales',
            data: [
              { x: 20, y: 40, r: 60 },
              { x: 30, y: 50, r: 10 },
              { x: 20, y: 40, r: 30 },
              { x: 60, y: 40, r: 30 },
            ],
            backgroundColor: ['red', 'green', 'blue', 'yellow'],
          },
        ],
      },
      options: {
        scales: { y: { beginAtZero: true } },
      },
    });
  }
}
