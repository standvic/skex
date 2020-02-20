import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { MembersComponent } from './members.component';

/**
 * The members module
 */
@NgModule({
  imports: [
    CommonModule,
    MembersRoutingModule
  ],
  declarations: [MembersComponent]
})
export class MembersModule {}
