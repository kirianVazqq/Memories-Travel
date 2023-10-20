import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListMemoryPage } from './list-memory.page';

const routes: Routes = [
  {
    path: '',
    component: ListMemoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListMemoryPageRoutingModule {}
