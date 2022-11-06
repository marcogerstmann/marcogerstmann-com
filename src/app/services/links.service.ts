import { Injectable } from '@angular/core';
import { Links } from '../shared/model/Links';
import links from '../../assets/data/links.json';

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  constructor() {}

  get(): Links {
    return links;
  }
}
