import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { TeamComponent } from './team.component';

export const routes: Routes = [
  { path: '', component: TeamComponent, pathMatch: 'full'  }
];

@NgModule({
  imports: [
    CommonModule,    
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    TeamComponent
  ]
})
export class TeamModule { }
