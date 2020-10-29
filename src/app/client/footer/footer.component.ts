import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

 
  successSubmission = false;
  failedSubmission = false;
  errorMsg = '';

  constructor(private api: ApiService) {
  }

  ngOnInit() {
  }

  onSubmit(form) {
    this.api.addNewsletter(form.value.email).subscribe(
      data => {
        this.successSubmission = true;
        setTimeout(() => { this.successSubmission = false; }, 5000);
      },
      error => {
        this.failedSubmission = true;
        // this.errorMsg = error.error.email;
        setTimeout(() => { this.failedSubmission = false; }, 3000);
      }
    )
    form.reset();
  }


}
