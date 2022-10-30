import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AppSettings } from './app.settings';
import { Settings } from './app.settings.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public settings: Settings;
  constructor(public appSettings:AppSettings, public router:Router){
    this.settings = this.appSettings.settings;
  } 

  ngAfterViewInit(){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.scrollToTop();
      }                
    });
  }

  public scrollToTop(){
    var scrollDuration = 200;
    var scrollStep = -window.scrollY / (scrollDuration / 20);
    var scrollInterval = setInterval(()=>{
      if(window.scrollY != 0){
         window.scrollBy(0, scrollStep);
      }
      else{
        clearInterval(scrollInterval); 
      }
    },10);
    if(window.innerWidth <= 960){
      window.scrollTo(0,0);
    }
  } 

}