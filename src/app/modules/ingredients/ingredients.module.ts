import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientsRoutingModule } from './ingredients-routing.module';
import { IngredientsComponent } from './ingredients.component';

/**
 * The ingredients module
 */
@NgModule({
  imports: [
    CommonModule,
    IngredientsRoutingModule
  ],
  declarations: [IngredientsComponent]
})
export class IngredientsModule {}
