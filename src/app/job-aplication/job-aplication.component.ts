import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-aplication',
  templateUrl: './job-aplication.component.html',
  styleUrls: ['./job-aplication.component.css'],
})
export class JobAplicationComponent implements OnInit {
  public jobForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    sname: new FormControl('', Validators.required),
    mail: new FormControl('', [Validators.required, Validators.email]),
    idNum: new FormControl('', [Validators.required]),
    adrs: new FormControl('', Validators.required),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {}

  validateInput(x: any) {
    return !this.jobForm.get(x)?.valid && this.jobForm.get(x)?.touched;
  }

  IDValidator($event: any) {
    let value = String.fromCharCode($event.keyCode);
    let regex = new RegExp('[0-9]');
    if (regex.test(value)) {
      return;
    }
    return false;
  }

  redirectToCongrats(){
    this.router.navigateByUrl('congrats');
  }
}
