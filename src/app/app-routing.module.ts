import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: '/about', pathMatch: 'full' },
      {
        path: 'about',
        loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'experience',
        loadChildren: () => import('./pages/experience/experience.module').then(m => m.ExperienceModule)
      },
      {
        path: 'education',
        loadChildren: () => import('./pages/education/education.module').then(m => m.EducationModule)
      },
      {
        path: 'skills',
        loadChildren: () => import('./pages/skills/skills.module').then(m => m.SkillsModule)
      }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      initialNavigation: 'enabledBlocking',
      relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
