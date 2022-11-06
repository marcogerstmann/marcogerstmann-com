import { Component, OnInit } from '@angular/core';
import { AboutDataService } from '../../services/about-data.service';
import { AboutData } from '../../shared/model/AboutData';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutData!: AboutData;

  constructor(private aboutDataService: AboutDataService) {}

  ngOnInit() {
    this.aboutData = this.aboutDataService.get();
  }
}
