import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: [ 'contact.component.css'
  ]
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;

  constructor() { }

  ngOnInit(): void {
    //create api call
    //create the form based on api field
  }

  submitForm(){
    const message = `My name is ${this.name}`
    alert(message);

  }


}
