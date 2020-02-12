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
    redirectTo: '/recipes',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MinLayoutComponent,
    children: [
      // { path: 'recipes', loadChildren: '../../modules/recipes/recipes.module#RecipesModule' },
    ]
  },
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      { path: 'recipes', loadChildren: '../../modules/recipes/recipes.module#RecipesModule' },
      { path: 'ingredients', loadChildren: '../../modules/ingredients/ingredients.module#IngredientsModule' },
      { path: 'menu-items', loadChildren: '../../modules/menu-items/menu-items.module#MenuItemsModule' },
      { path: 'ingredients', loadChildren: '../../modules/products/products.module#ProductsModule' },
      { path: 'wine', loadChildren: '../../modules/wine/wine.module#WineModule' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
