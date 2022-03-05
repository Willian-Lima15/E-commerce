import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ListHouseComponent } from './views/list-house/list-house/list-house.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'list-house', component: ListHouseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
