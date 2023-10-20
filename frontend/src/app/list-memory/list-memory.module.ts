import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListMemoryPageRoutingModule } from './list-memory-routing.module';

import { ListMemoryPage } from './list-memory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListMemoryPageRoutingModule
  ],
  declarations: [ListMemoryPage]
})
export class ListMemoryPageModule {}
