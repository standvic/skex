import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModelsComponent } from './models.component';

const routes: Routes = [
  { path: '', component: ModelsComponent }
];

/**
 * The ingredients routing module
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelsRoutingModule {}
