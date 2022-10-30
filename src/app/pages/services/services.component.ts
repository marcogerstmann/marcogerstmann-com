import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  public services = [
    { 
      icon: 'computer', 
      title: 'Web Development', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
    },
    { 
      icon: 'palette', 
      title: 'Web Design', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
    },
    { 
      icon: 'photo_camera', 
      title: 'Photography', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
    },
    { 
      icon: 'queue_music', 
      title: 'Music Writting', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
    },
    { 
      icon: 'volume_up', 
      title: 'Advertising', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
    },
    { 
      icon: 'contact_support', 
      title: 'Support', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
