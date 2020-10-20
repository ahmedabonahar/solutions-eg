import { Component, OnInit } from '@angular/core';
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

  constructor(private global: Globals, private translate: TranslateService,) {
    this.data = this.global.staticProjects;

    translate.onLangChange.subscribe((val) => {
      this.currentLang = translate.store.currentLang;
    });

   }

  ngOnInit(): void {
  }

  
}
