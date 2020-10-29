import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  showMsg: boolean = false;
  showMsgErorr: boolean= false;
  errorMsg =[];

  constructor(private http: HttpClient,
    public api: ApiService,
    public sanitizer: DomSanitizer,
    private title: Title) {
      this.title.setTitle('Solutions | Contact');
    }

  ngOnInit(): void {
  }


  subForm(form) {
    console.log(form.value)
    this.api.addContactUs(form.value).subscribe(
      data => {
          form.reset();
          window.scrollTo(0, 0)
          this.showMsg = true;
      },
      error => {
        this.showMsgErorr = true;
        this.errorMsg = error.error;
      }
    )
  }


  keyPressNum(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  keyPressStr(event: any) {
    const stringAllow = /[a-z\A-Z\ \[\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufc3f]|[\ufe70-\ufefc]|[\u0200]|[\u00A0] \ ]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !stringAllow.test(inputChar)) {
      event.preventDefault();
    }
  }

}
