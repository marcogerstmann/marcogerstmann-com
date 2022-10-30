import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  public educations = [
    { 
      name: 'software engineering', 
      dateRange: '2010 - 2013',
      centre: 'University of Oxford',
      location: 'Oxford, United Kingdom',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque sunt, id quibusdam suscipit rerum, deserunt consequatur blanditiis minima nesciunt odit est quidem qui.'
    },
    { 
      name: 'master of information technology', 
      dateRange: '2008 - 2010',
      centre: 'Stanford University',
      location: 'Stanford, California, USA',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque sunt, id quibusdam suscipit rerum, deserunt consequatur blanditiis minima nesciunt odit est quidem qui.'
    },
    { 
      name: 'specialization course', 
      dateRange: '2006 - 2008',
      centre: 'Sorbonne University',
      location: 'Paris, France',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque sunt, id quibusdam suscipit rerum, deserunt consequatur blanditiis minima nesciunt odit est quidem qui.'
    },
    { 
      name: 'bachelor computer engineering', 
      dateRange: '2004 - 2006',
      centre: 'Harvard University',
      location: 'Cambridge, Massachusetts, USA',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque sunt, id quibusdam suscipit rerum, deserunt consequatur blanditiis minima nesciunt odit est quidem qui.'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
