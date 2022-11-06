import { Injectable } from '@angular/core';
import { AboutData } from '../shared/model/AboutData';
import aboutData from '../../assets/data/about.json';

@Injectable({
  providedIn: 'root'
})
export class AboutDataService {
  constructor() {}

  get(): AboutData {
    return aboutData;
  }
}
