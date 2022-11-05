import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home-page/home.component';
import { TechnicPageComponent } from './technic-page/technic-page.component';
import { MissionPageComponent } from './mission-page/mission-page.component';
import { TechnicItemDetailComponent } from './technic-item-detail/technic-item-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:"full" },
  { path: 'home', component: HomeComponent },
  { path: 'technic', component: TechnicPageComponent },
  { path: 'missions', component: MissionPageComponent },
  { path: 'technic/:id', component: TechnicItemDetailComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {enableTracing:true}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
