import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blaze ';
  public timer = 0;
  public days = 0;
  public hours = 0;
  public minutes = 0;
  public seconds = 0;
  public showError = false;
  public submitAttempt = false;
  contactUsForm: FormGroup;
  public message = {
    name: '',
    surname: '',
    contactNumber: '',
    emailaddress: '',
    message: '',
  }

  constructor(public formBuilder: FormBuilder, public db: AngularFireDatabase) {
    this.timerTick();
    this.contactUsForm = formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      surname: ['', Validators.compose([Validators.required])],
      contactNumber: ['', Validators.compose([Validators.required])],
      emailaddress: ['', Validators.compose([Validators.required])],
      message: ['', Validators.compose([Validators.required])],
    });
  }

  sendMessage (){
    this.submitAttempt = true;
    this.showError = false;
    if (this.contactUsForm.valid) {
      this.db.list('/messages').push(this.message);  
      let emailTosent = {
        name: this.message.name,
        surname: this.message.surname,
        contactnumber: "0" + this.message.contactNumber,
        emailaddress: this.message.emailaddress,
        message: this.message.message,
      };
      let emailTosentJson = JSON.stringify(emailTosent);
      this.showError = true;
      this.message = {
        name: '',
        surname: '',
        contactNumber: '',
        emailaddress: '',
        message: '',
      }
      this.contactUsForm.reset();
      this.submitAttempt = false;
    }
  }

  
  timerTick() {
    setTimeout(() => {
      let toDate = new Date("2018/11/14 0:00 AM");
      //let toDate = new Date("2018/10/0 15:4 PM");
      var now = new Date();
      var difference = toDate.getTime() - now.getTime();
      if (difference <= 0 || isNaN(difference)) { return; }
      var seconds = Math.floor(difference / 1000);
      var minutes = Math.floor(seconds / 60);
      var hours = Math.floor(minutes / 60);
      var days = Math.floor(hours / 24);
  
      hours %= 24;
      minutes %= 60;
      seconds %= 60;
  
      this.days = days;
      this.hours = hours;
      this.minutes = minutes;
      this.seconds = seconds;
      if (difference > 0) {
        this.timerTick();
      }
    }, 1000);
  }
}
