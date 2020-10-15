import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


declare var Swiper: any;
declare var $: any;
declare var UIkit: any;
declare var anime: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  arabic = false;


  constructor(private translate: TranslateService) {


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
  ngOnInit(): void {


    // Wrap every letter in a span for h1
    var textWrapper = document.querySelector('.ml1 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: true })
      .add({
        targets: '.ml1 .letter',
        scale: [0.3, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 600,
        delay: (el, i) => 70 * (i + 1)
      }).add({
        targets: '.ml1 .line',
        scaleX: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700,
        offset: '-=875',
        delay: (el, i, l) => 80 * (l - i)
      }).add({
        targets: '.ml1',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 10000000000
      });


    

    var swiper = new Swiper('.swiper-container', {
      effect: 'fade',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      simulateTouch: false,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

}
