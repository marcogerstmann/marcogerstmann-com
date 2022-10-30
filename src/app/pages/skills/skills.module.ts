import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { SkillsComponent } from './skills.component';

export const routes: Routes = [
  { path: '', component: SkillsComponent, pathMatch: 'full'  }
];

@NgModule({
  imports: [
    CommonModule,    
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    SkillsComponent
  ]
})
export class SkillsModule { }
