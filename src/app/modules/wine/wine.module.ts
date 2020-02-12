import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WineRoutingModule } from './wine-routing.module';
import { WineComponent } from './wine.component';

/**
 * The products module
 */
@NgModule({
  imports: [
    CommonModule,
    WineRoutingModule
  ],
  declarations: [WineComponent]
})
export class WineModule {}
