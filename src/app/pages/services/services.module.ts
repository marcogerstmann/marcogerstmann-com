import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ServicesComponent } from './services.component';

export const routes: Routes = [
  { path: '', component: ServicesComponent, pathMatch: 'full'  }
];

@NgModule({
  imports: [
    CommonModule,    
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    ServicesComponent
  ]
})
export class ServicesModule { }
