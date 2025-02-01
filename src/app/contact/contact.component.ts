import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  email: string = "haaithaam@hotmail.com";
  phone: string = "+962 788 821 779";
  linkedin: string = "https://linkedin.com/in/haithamkh";
  github: string = "https://github.com/HaithaamKH";


}