import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module'; 

import { OverlayContainer } from '@angular/cdk/overlay';
import { CustomOverlayContainer } from './theme/utils/custom-overlay-container';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppSettings } from './app.settings'; 
import { PagesComponent } from './pages/pages.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MenuComponent } from './theme/components/menu/menu.component';
import { FooterComponent } from './theme/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    NotFoundComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    HttpClientModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    AppSettings,
    { provide: OverlayContainer, useClass: CustomOverlayContainer }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
