import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ExperienceComponent } from './experience.component';

export const routes: Routes = [
  { path: '', component: ExperienceComponent, pathMatch: 'full'  }
];

@NgModule({
  imports: [
    CommonModule,    
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    ExperienceComponent
  ]
})
export class ExperienceModule { }
