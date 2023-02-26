import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DressListComponent } from './dress-list/dress-list.component';

const routes: Routes = [
  {path: 'home', component: DressListComponent},

  { path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
