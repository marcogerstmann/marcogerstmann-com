import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { PortfolioComponent } from './portfolio.component';
import { ItemDialogComponent } from './item-dialog/item-dialog.component';

export const routes: Routes = [
  { path: '', component: PortfolioComponent, pathMatch: 'full'  }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ],
    declarations: [
        PortfolioComponent,
        ItemDialogComponent
    ]
})
export class PortfolioModule { }
