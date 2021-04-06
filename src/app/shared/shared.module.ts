import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { ChartjsModule } from './chartjs/chartjs.module';
import { DropupModule } from './dropdowns/dropup.module';
import { FooterrModule } from './footers/footerr.module';
import { MappeModule } from './maps/mappe.module';
import { MatModule } from './mat/mat.module';
import { NavbarianModule } from './navbars/navbarian.module';

const MODS = [
  DropupModule,
  FooterrModule,
  MappeModule,
  MatModule,
  NavbarianModule,
  ChartjsModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    ...MODS,
  ],
  exports: [
    ...MODS
  ]
})
export class SharedModule { }
