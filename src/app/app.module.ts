import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
var config = {
  apiKey: "AIzaSyBVnK7mzG3o4pJjLoHexg8RJOdJj3J4cPc",
  authDomain: "test-3bbd0.firebaseapp.com",
  databaseURL: "https://test-3bbd0.firebaseio.com",
  projectId: "test-3bbd0",
  storageBucket: "test-3bbd0.appspot.com",
  messagingSenderId: "27131835239"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule, // for database
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
