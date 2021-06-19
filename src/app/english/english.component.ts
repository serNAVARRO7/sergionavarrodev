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
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });
  invalidForm: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
  }

  mailMe(){
    if (this.contactForm.valid ) {
      this.invalidForm = false;
      const mailText = `mailto:${this.contactForm.get('subject')?.value}?subject=${this.contactForm.get('email')?.value}&body=${this.contactForm.get('message')?.value}`;
      window.location.href = mailText;
    }
    else {
      this.invalidForm = true;
    }
  }
}