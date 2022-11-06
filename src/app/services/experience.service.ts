import { Injectable } from '@angular/core';
import { Experience } from '../shared/model/Experience';
import experience from '../../assets/data/experience.json';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  constructor() {}

  get(): Experience[] {
    return experience;
  }
}
