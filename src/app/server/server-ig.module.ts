import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackPackerModule } from './back-pack/back-packer/back-packer.module';
import { BackStackerModule } from './back-stack/back-stacker/back-stacker.module';
import { BackTrackerModule } from './back-track/back-tracker/back-tracker.module';
import { HacModule } from './conn-ectome/hac/hac/hac.module';

const MODS = [
  CommonModule,
  BackPackerModule,
  BackStackerModule,
  BackTrackerModule,
  HacModule
]

@NgModule({
  declarations: [],
  imports: [
    ...MODS
  ],
  exports: [
    ...MODS
  ]
})
export class ServerIgModule { }
