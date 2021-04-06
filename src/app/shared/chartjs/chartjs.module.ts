import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartRadarComponent } from './chart-radar/chart-radar.component';
import { ChartPieComponent } from './chart-pie/chart-pie.component';
import { ChartLineComponent } from './chart-line/chart-line.component';
import { ChartBarComponent } from './chart-bar/chart-bar.component';

const COMPS = [ChartRadarComponent, ChartPieComponent, ChartLineComponent, ChartBarComponent]

@NgModule({
  declarations: [
    ...COMPS
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...COMPS
  ]
})
export class ChartjsModule { }
