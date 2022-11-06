import { Component, OnInit } from '@angular/core';
import { Experience } from '../../shared/model/Experience';
import { ExperienceService } from '../../services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experiences!: Experience[];

  constructor(private experienceService: ExperienceService) {}

  ngOnInit() {
    this.experiences = this.experienceService.get();
  }
}
