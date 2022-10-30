import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  public expiriences = [
    { 
      position: 'full stack developer', 
      dateRange: '2018 - Present',
      company: 'Google Inc',
      fullDateRange: 'Jan 2018 - Present day',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque sunt, id quibusdam suscipit rerum, deserunt consequatur blanditiis minima nesciunt odit est quidem qui.'
    },
    { 
      position: 'web master / web developer', 
      dateRange: '2016 - 2018',
      company: 'Apple Inc',
      fullDateRange: 'Sep 2016 - Jan 2018',
      desc: 'Pellentesque porttitor vulputate eros, a vestibulum justo. Nunc molestie, velit vel pellentesque iaculis, eros urna mattis ante, vitae tincidunt erat lectus quis elit. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
    },
    { 
      position: 'frontend developer', 
      dateRange: '2013 - 2016',
      company: 'Web Agency',
      fullDateRange: 'May 2013 - Sep 2016',
      desc: 'Maecenas nec neque fringilla nisi hendrerit rhoncus et vitae sapien. Vestibulum tincidunt est sed enim laoreet tincidunt. In vel porta ligula, at eleifend mauris. Ut lectus diam, auctor eget pharetra et, posuere ullamcorper urna.'
    },
    { 
      position: 'graphic designer', 
      dateRange: '2010 - 2013',
      company: 'Web Agency',
      fullDateRange: 'Sep 2010 - May 2013',
      desc: 'Sed mattis urna sem, non tempor felis blandit non. In hac habitasse platea dictumst. Praesent in quam in tortor vulputate blandit et non augue.'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
