import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  public members = [
    { name: 'Ashley Ahlberg', position:'Product designer', photo: 'assets/img/team/ashley.jpg' },
    { name: 'Bruno Vespa', position:'Sale manager', photo: 'assets/img/team/bruno.jpg' },
    { name: 'Julia Aniston', position:'Web designer', photo: 'assets/img/team/julia.jpg' },
    { name: 'Michael Blair', position:'Software developer', photo: 'assets/img/team/michael.jpg' }
  ]
  constructor() { }

  ngOnInit() {
  }

}
