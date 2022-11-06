import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AppSettings } from '../app.settings';
import { Settings } from '../app.settings.model';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  @ViewChild('drawer') drawer: any;
  public settings: Settings;
  public showBackToTop: boolean = false;

  constructor(public appSettings: AppSettings, public router: Router) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {}

  public changeSkin(skin: string) {
    this.settings.skin = skin;
  }

  @HostListener('window:resize')
  public onWindowResize(): void {
    if (window.innerWidth > 960) {
      this.drawer.close();
    }
  }

  @HostListener('window:scroll')
  public onWindowScroll() {
    window.scrollY > 250
      ? (this.showBackToTop = true)
      : (this.showBackToTop = false);
  }

  ngAfterViewInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (window.innerWidth <= 960) {
          this.drawer.close();
        }
      }
    });
  }
}
