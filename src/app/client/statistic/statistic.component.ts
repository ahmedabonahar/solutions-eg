import { Component, OnInit } from '@angular/core';


declare var $: any;

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit{

  constructor() {
   
   }


  ngOnInit(): void {
    $(document).ready(function(){
      $('.count h2').each(function() {
          var $this = $(this);
          if ($this.attr('data-count').indexOf('+') > -1) {
             var countTo = $this.attr('data-count').replace(/[,+]/g, "");
              
              $({ countNum: $this.text() }).animate({
                      countNum: countTo
                  },
      
                  {
                      duration: 5000,
                      easing: 'linear',
                      step: function() {
                          $this.text(Math.floor(this.countNum));
                      },
                      complete: function() {
                          $this.text($this.attr('data-count'));
                          //alert('finished');
                      }
      
                  });
      
          } else {
              countTo = $this.attr('data-count');
              $(this).prop('countTo', 0).animate({
                  countTo: $(this).text()
              }, {
                  duration: 6000,
                  easing: 'swing',
                  step: function(now) {
                      $(this).text(Math.ceil(now));
                  }
              });
      
      
          }
      });
      });
  }

}
