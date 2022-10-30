import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  public statistics = [
    { 
      icon: 'sentiment_satisfied_alt', 
      title: 'Happy Clients', 
      count: 1750
    },
    { 
      icon: 'folder', 
      title: 'Projects', 
      count: 235
    },
    { 
      icon: 'access_time', 
      title: 'Working Hours', 
      count: 67584
    },
    { 
      icon: 'code', 
      title: 'Code rows', 
      count: 1850
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
