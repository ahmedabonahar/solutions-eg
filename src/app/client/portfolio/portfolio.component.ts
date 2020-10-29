import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Globals } from 'src/app/app.config';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  data : any = [];
  currentLang = localStorage.getItem('lang');

  constructor(private global: Globals, private translate: TranslateService, private title :Title) {
    this.data = this.global.staticProjects;
    this.title.setTitle('Solutions | Portfolio');

    translate.onLangChange.subscribe((val) => {
      this.currentLang = translate.store.currentLang;
    });

   }

  ngOnInit(): void {
  }

  
}
