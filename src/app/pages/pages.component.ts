import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AppSettings } from '../app.settings';
import { Settings } from '../app.settings.model';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  @ViewChild('drawer') drawer:any;
  public settings: Settings;
  public showBackToTop:boolean = false;
  
  constructor(public appSettings:AppSettings, public router:Router){
    this.settings = this.appSettings.settings;
  }

  ngOnInit() { 
  }

  public changeSkin(skin:string){
    this.settings.skin = skin;       
  } 
 

  @HostListener('window:resize')
  public onWindowResize():void {
    if(window.innerWidth > 960) {
      this.drawer.close(); 
    }
  }

  @HostListener("window:scroll")
  public onWindowScroll() {
    (window.scrollY > 250) ? this.showBackToTop = true : this.showBackToTop = false;
  }

  ngAfterViewInit(){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {      
        if(window.innerWidth <= 960){
          this.drawer.close(); 
        }
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