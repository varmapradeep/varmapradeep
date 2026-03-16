import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NgForm } from '@angular/forms';
declare var emailjs: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  isSubmitting = false;
  messageStatus = '';
  buttonMessage = 'Send Message';


  constructor(private http: HttpClient) { }

  onSubmit(form: any) {
    if (form.invalid) return;
    this.isSubmitting = true;
    this.buttonMessage = 'Sending...';

    const templateParams = {
      name: form.value.name,
      email: form.value.email,
      phone: form.value.phone,
      subject: form.value.subject || 'New Contact Message',
      message: form.value.message
    };
    emailjs.send('service_st0gbx7', 'template_mlkie79', templateParams).then(() => {
      this.isSubmitting = false;
      this.messageStatus = 'success';
      this.buttonMessage = '✓ Message Sent!';
      form.reset();

      setTimeout(() => {
        this.messageStatus = '';
        this.buttonMessage = 'Send Message';
      }, 4000);

    }, (error: any) => {

      console.error('EmailJS Error:', error);
      this.isSubmitting = false;
      this.messageStatus = 'error';
      this.buttonMessage = '✗ Error Sending';

      setTimeout(() => {
        this.messageStatus = '';
        this.buttonMessage = 'Send Message';
      }, 4000);
    });
  }
}

