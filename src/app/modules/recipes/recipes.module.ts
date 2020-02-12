import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';

/**
 * The products module
 */
@NgModule({
  imports: [
    CommonModule,
    RecipesRoutingModule
  ],
  declarations: [RecipesComponent]
})
export class RecipesModule {}
