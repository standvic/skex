import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MinLayoutComponent} from './min-layout/min-layout.component';
import {FullLayoutComponent} from './full-layout/full-layout.component';
import {LayoutRoutingModule} from './layout-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

// import { FlexLayoutModule } from '@angular/flex-layout';

/**
 * The layout module. Includes {@link FooterComponent}, {@link HeaderComponent}, {@link MinLayoutComponent}
 */
@NgModule({
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatGridListModule, LayoutRoutingModule/*, FlexLayoutModule*/],
  exports: [],
  declarations: [FooterComponent, HeaderComponent, MinLayoutComponent, FullLayoutComponent]
})
export class LayoutModule {}
