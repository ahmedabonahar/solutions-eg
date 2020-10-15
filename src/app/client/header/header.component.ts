import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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
