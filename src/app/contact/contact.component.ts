import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    if (form.invalid) {
      return;
    }

    this.isSubmitting = true;
    this.buttonMessage = 'Sending...';
    const formData = new FormData();
    formData.append('sent', 'true');
    formData.append('name', form.value.name);
    formData.append('email', form.value.email);
    formData.append('phone', form.value.phone);
    formData.append('subject', form.value.subject);
    formData.append('message', form.value.message);

    // Add browser-like headers to bypass DDoS protection
    const headers = new HttpHeaders({
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    });

    this.http.post('https://phpmailer.infinityfreeapp.com/forms/contact.php', formData, { headers }).subscribe(
      (response: any) => {
        this.isSubmitting = false;
        this.messageStatus = 'success';
        this.buttonMessage = '✓ Message Sent!';
        form.reset();
        setTimeout(() => {
          this.messageStatus = '';
          this.buttonMessage = 'Send Message';
        }, 4000);
      },
      (error) => {
        this.isSubmitting = false;
        this.messageStatus = 'error';
        this.buttonMessage = '✗ Error Sending';
        console.error('Error sending email:', error);
        setTimeout(() => {
          this.messageStatus = '';
          this.buttonMessage = 'Send Message';
        }, 4000);
      }
    );
  }
}

