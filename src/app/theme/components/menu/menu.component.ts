import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {
  public isSmallDevice: boolean = false;
  public menuItems = [
    { title: 'about', routerLink: '/about', icon: 'person' },
    { title: 'experience', routerLink: '/experience', icon: 'touch_app' },
    { title: 'skills', routerLink: '/skills', icon: 'build' },
    { title: 'education', routerLink: '/education', icon: 'school' }
  ];
  public settings: Settings;

  constructor(public appSettings: AppSettings) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    window.innerWidth < 960 ? (this.isSmallDevice = true) : (this.isSmallDevice = false);
  }

  @HostListener('window:resize')
  public onWindowResize(): void {
    window.innerWidth < 960 ? (this.isSmallDevice = true) : (this.isSmallDevice = false);
  }
}
