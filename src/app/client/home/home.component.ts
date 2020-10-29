import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Globals } from 'src/app/app.config';


declare var $: any;
declare var jQuery: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private translate: TranslateService, private title: Title) {
    this.translate.setDefaultLang('en');
    this.title.setTitle('Solutions - Consulting Agency, Financial Service');

  }


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
