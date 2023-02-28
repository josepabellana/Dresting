import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDressComponent } from './add-dress/add-dress.component';
import { DressListComponent } from './dress-list/dress-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'seller', component: AddDressComponent},
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
