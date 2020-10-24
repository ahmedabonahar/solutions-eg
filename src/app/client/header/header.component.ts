import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

declare var $: any;

declare var Expo: any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  arabic = false;


  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {

  }


  openNav() {
    document.getElementById("mySidebar").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";

  }

  closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  useLanguage(language: string) {
    this.translate.use(language);
    console.log(this.translate.use(language))
    localStorage.setItem('lang', language);
    if (language == 'ar')
      this.arabic = true;
    else
      this.arabic = false;
  }


}
