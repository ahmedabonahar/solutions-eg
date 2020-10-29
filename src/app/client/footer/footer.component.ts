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
    console.log(form.value);
    
    this.api.addNewsletter(form.value.email).subscribe(
      data => {
        console.log(data);
        
        this.successSubmission = true;
        setTimeout(() => { this.successSubmission = false; }, 5000);
      },
      error => {
        console.log(error);
        
        this.failedSubmission = true;
        // this.errorMsg = error.error.email;
        setTimeout(() => { this.failedSubmission = false; }, 3000);
      }
    )
    form.reset();
  }


}
