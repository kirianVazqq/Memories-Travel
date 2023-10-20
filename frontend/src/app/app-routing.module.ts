import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-memories',
    pathMatch: 'full'
  },
  {
    path: 'add-memory',
    loadChildren: () => import('./add-memory/add-memory.module').then( m => m.AddMemoryPageModule)
  },  
  {
    path: 'add-memory/:id',
    loadChildren: () => import('./add-memory/add-memory.module').then( m => m.AddMemoryPageModule)
  },
  {
    path: 'list-memories',
    loadChildren: () => import('./list-memory/list-memory.module').then( m => m.ListMemoryPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
