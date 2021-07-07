import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-english',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.scss']
})
export class EnglishComponent implements OnInit {
  contactForm = this.fb.group({
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });
  invalidForm: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
  }

  mailMe(){
    if (this.contactForm.valid ) {
      this.invalidForm = false;
      const mailText = `mailto:navarrosergio1998@gmail.com?subject=${this.contactForm.get('subject')?.value}&body=${this.contactForm.get('message')?.value}`;
      window.location.href = mailText;
    }
    else {
      this.invalidForm = true;
    }
  }
}
