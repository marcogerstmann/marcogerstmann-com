import { Component, OnInit, Input } from '@angular/core';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent implements OnInit {
  @Input('image') image!:string;
  @Input('icon') icon!:string;
  @Input('headerTitle') headerTitle!:string;
  @Input('desc') desc!:string;

  public settings: Settings;
  constructor(public appSettings:AppSettings) { 
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
  }

}
