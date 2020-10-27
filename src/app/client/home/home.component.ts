import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Globals } from 'src/app/app.config';


declare var Swiper: any;
declare var $: any;
declare var UIkit: any;
declare var anime: any;
declare var jQuery: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private translate: TranslateService) {

    translate.setDefaultLang('en');


  }
  // useLanguage(language: string) {
  //   this.translate.use(language);
  //   console.log(this.translate.use(language))
  //   localStorage.setItem('lang', language);
  //   if (language == 'ar')
  //     this.arabic = true;
  //   else
  //     this.arabic = false;
  // }

  ngOnInit(): void {
    $(document).ready(() => {
      $(window).scroll(e => {
        $('html, body').animate(
          {
            // scrollTop: $("#our-details").offset().top
          },
          2000
        );
        // $("html, body").delay(2000).animate({scrollTop: $('#our-details').offset().top }, 2000);
        parallaxScroll();
      });
      function parallaxScroll() {
        let scrolled = $(window).scrollTop();
        $('.glitch').css('top', 0 - scrolled * 0.1 + 'px');
      }
    });

    // to scroll
    (function ($) {
      $(function () {
        function scrollBanner() {
          $(document).scroll(function () {
            var scrollPos = $(this).scrollTop();
            $('.glitch').css({
              'top': (scrollPos / 3) + 'px',
              'opacity': 1 - (scrollPos / 450)
            });
            $('#banner').css({
              'background-position': 'center ' + (-scrollPos / 3) + 'px'
            });
          });
        }
        scrollBanner();
      });
    })(jQuery);
  }


}
