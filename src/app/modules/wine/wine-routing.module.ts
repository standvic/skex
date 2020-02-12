import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WineComponent } from './wine.component';

const routes: Routes = [
  { path: '', component: WineComponent }
];

/**
 * The wine routing module
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WineRoutingModule {}
