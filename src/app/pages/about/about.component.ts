import { Component, OnInit } from '@angular/core';
import { AboutDataService } from '../../services/about-data.service';
import { AboutData } from '../../shared/model/AboutData';
import { LinksService } from '../../services/links.service';
import { Links } from '../../shared/model/Links';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutData!: AboutData;
  links!: Links;

  constructor(private aboutDataService: AboutDataService,
              private linksService: LinksService) {}

  ngOnInit() {
    this.aboutData = this.aboutDataService.get();
    this.links = this.linksService.get();
  }
}
