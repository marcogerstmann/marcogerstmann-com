import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public settings: Settings;
  constructor(public appSettings:AppSettings) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
  }

  getDemo(skin:string){
    this.settings.skin = skin;
  }

}
