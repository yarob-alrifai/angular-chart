import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartBarComponent } from './components/chart-bar/chart-bar.component';

const routes: Routes = [



  { path: '', component: ChartBarComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
