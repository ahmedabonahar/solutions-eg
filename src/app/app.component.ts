import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    this.resetLang();
  }


  onActivate(event) {
    window.scroll(0, 0);
    
  }


  getBodyLang() {
    if (localStorage.getItem('lang'))
      if (localStorage.getItem('lang') == 'ar')
        return true;
    return false
  }

  resetLang() {
    localStorage.setItem('lang', 'en')
  }



}
