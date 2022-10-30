import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about.component';

export const routes: Routes = [
  { path: '', component: AboutComponent, pathMatch: 'full'  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    HttpClientModule
  ],
  declarations: [
    AboutComponent
  ]
})
export class AboutModule { }
