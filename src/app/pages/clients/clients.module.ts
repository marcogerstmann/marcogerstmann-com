import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ClientsComponent } from './clients.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AllClientsComponent } from './all-clients/all-clients.component';

export const routes: Routes = [
  { path: '', component: ClientsComponent, pathMatch: 'full'  }
];

@NgModule({
  imports: [
    CommonModule,    
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    ClientsComponent,
    TestimonialsComponent,
    StatisticsComponent,
    AllClientsComponent
  ]
})
export class ClientsModule { }
