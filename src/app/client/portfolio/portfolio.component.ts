import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/app.config';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  data : any = [];

  constructor(private global: Globals) {
    this.data = this.global.staticProjects;
   }

  ngOnInit(): void {
  }

}
