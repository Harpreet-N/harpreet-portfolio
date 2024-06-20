import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  onSubmit() {
    alert('Form submitted!');
    // Here you can handle the form submission, e.g., send the data to a backend server
  }


}
