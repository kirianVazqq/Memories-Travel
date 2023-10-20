import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMemoryPageRoutingModule } from './add-memory-routing.module';

import { AddMemoryPage } from './add-memory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddMemoryPageRoutingModule
  ],
  declarations: [AddMemoryPage]
})
export class AddMemoryPageModule {}
