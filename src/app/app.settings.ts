import { Injectable } from '@angular/core';
import { Settings } from './app.settings.model';

@Injectable()
export class AppSettings {
  public settings = new Settings(
    'Marco Gerstmann - Website', // Theme name
    'grey-light', // indigo-light, teal-light, red-light, grey-light, blue-dark, green-dark, pink-dark, amber-dark
    true // Has header background image
  );
}
