import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartBarComponent } from './components/chart-bar/chart-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartPieComponent } from './components/chart-pie/chart-pie.component';
import { ChartDoughnutComponent } from './components/chart-doughnut/chart-doughnut.component';
import { ChartPolarAreaComponent } from './components/chart-polar-area/chart-polar-area.component';
import { ChartRadarComponent } from './components/chart-radar/chart-radar.component';
import { ChartLineComponent } from './components/chart-line/chart-line.component';
import { ChartBubbleComponent } from './components/chart-bubble/chart-bubble.component';
import { ChartScatterComponent } from './components/chart-scatter/chart-scatter.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
@NgModule({
  declarations: [AppComponent, ChartBarComponent, ChartPieComponent, ChartDoughnutComponent, ChartPolarAreaComponent, ChartRadarComponent, ChartLineComponent, ChartBubbleComponent, ChartScatterComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
