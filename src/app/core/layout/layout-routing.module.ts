import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import {MinLayoutComponent} from './min-layout/min-layout.component';

/**
 * The layout routing module with lazy loaded modules.
 */
const routes: Routes = [
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MinLayoutComponent,
    children: [
      // { path: 'search', loadChildren: '../../modules/search/search.module#SearchModule' },
    ]
  },
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      { path: 'search', loadChildren: '../../modules/search/search.module#SearchModule' },
      { path: 'models', loadChildren: '../../modules/models/models.module#ModelsModule' },
      { path: 'members', loadChildren: '../../modules/members/members.module#MembersModule' },
      { path: 'collections', loadChildren: '../../modules/collections/collections.module#CollectionsModule' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
