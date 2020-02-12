import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuItemsRoutingModule } from './menu-items-routing.module';
import { MenuItemsComponent } from './menu-items.component';

/**
 * The menu items module
 */
@NgModule({
  imports: [
    CommonModule,
    MenuItemsRoutingModule
  ],
  declarations: [MenuItemsComponent]
})
export class MenuItemsModule {}
