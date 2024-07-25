import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartBarComponent } from './components/chart-bar/chart-bar.component';
import { ChartPieComponent } from './components/chart-pie/chart-pie.component';
import { DoughnutController } from 'chart.js';
import { ChartDoughnutComponent } from './components/chart-doughnut/chart-doughnut.component';
import { ChartPolarAreaComponent } from './components/chart-polar-area/chart-polar-area.component';
import { ChartRadarComponent } from './components/chart-radar/chart-radar.component';
import { ChartLineComponent } from './components/chart-line/chart-line.component';
import { ChartBubbleComponent } from './components/chart-bubble/chart-bubble.component';
import { ChartScatterComponent } from './components/chart-scatter/chart-scatter.component';

const routes: Routes = [

  { path: '', redirectTo: '/pie', pathMatch: 'full' }, // Redirect to products route if no path is specified
  { path: 'pie', component: ChartPieComponent },
  { path: 'polar', component: ChartPolarAreaComponent },
  { path: 'radar', component: ChartRadarComponent },
  { path: 'line', component: ChartLineComponent },
  { path: 'scatter', component: ChartScatterComponent },
  { path: 'bubble', component: ChartBubbleComponent },
  { path: 'doughnut', component: ChartDoughnutComponent },
  { path: 'bar', component: ChartBarComponent },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
