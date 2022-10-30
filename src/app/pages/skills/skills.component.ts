import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public skills = [
    { 
      name: 'Design',
      items:[ 
        { name: 'Photoshop', value: 90 },
        { name: 'Illustrator', value: 70 },
        { name: 'Indesign', value: 50 },
        { name: 'Flash', value: 50 }
      ]
    },
    { 
      name: 'Coding',
      items:[ 
        { name: 'WordPress', value: 90 },
        { name: 'HTML / CSS', value: 70 },
        { name: 'PHP / MySQL', value: 80 },
        { name: 'Angular / JavaScript', value: 50 }
      ]
    },
    { 
      name:'Office',
      items:[ 
        { name: 'MS Excel', value: 90 },
        { name: 'MS Word', value: 70 },
        { name: 'PowerPoint', value: 40 },
        { name: 'Outlook', value: 60 }
      ]
    },
    { 
      name:'Language',
      items:[ 
        { name: 'English', value: 95 },
        { name: 'French', value: 60 },
        { name: 'German', value: 50 },
        { name: 'Spanish', value: 30 }
      ]
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
