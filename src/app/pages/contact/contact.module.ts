import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
// import { AgmCoreModule } from '@agm/core';
import { ContactComponent } from './contact.component';

export const routes: Routes = [
  { path: '', component: ContactComponent, pathMatch: 'full'  }
];

@NgModule({
  imports: [
    CommonModule,    
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule,
    // AgmCoreModule
  ],
  declarations: [
    ContactComponent
  ]
})
export class ContactModule { }
