import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelsRoutingModule } from './models-routing.module';
import { ModelsComponent } from './models.component';

/**
 * The models module
 */
@NgModule({
  imports: [
    CommonModule,
    ModelsRoutingModule
  ],
  declarations: [ModelsComponent]
})
export class ModelsModule {}
