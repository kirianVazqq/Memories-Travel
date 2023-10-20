import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMemoryPage } from './add-memory.page';

const routes: Routes = [
  {
    path: '',
    component: AddMemoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMemoryPageRoutingModule {}
