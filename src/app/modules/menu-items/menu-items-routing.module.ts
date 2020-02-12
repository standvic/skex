import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuItemsComponent } from './menu-items.component';

const routes: Routes = [
  { path: '', component: MenuItemsComponent }
];

/**
 * The menu items routing module
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuItemsRoutingModule {}
