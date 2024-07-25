import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ApiService } from '../../services/api.service';
import { Sale } from '../../models/sale';
Chart.register(...registerables);

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrl: './chart-bar.component.css',
})
export class ChartBarComponent implements OnInit {
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
          'barchart',
          'bar'
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
        labels: labeldata,
        datasets: [
          {
            label: 'Sales',
            data: realdata,
            backgroundColor: colorCode,
          },
        ],
      },
      options: {
        scales: { y: { beginAtZero: true } },
      },
    });
  }
}
