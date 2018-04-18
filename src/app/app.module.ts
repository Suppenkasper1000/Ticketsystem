import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { FirebaseConfig } from '../environments/firebase.config';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: "AIzaSyCsrR1pZ5mncb7xWh9iX5khwwAKYAUQ1gw",
  authDomain: "ticketsystem-8616e.firebaseapp.com",
  databaseURL: "https://ticketsystem-8616e.firebaseio.com",
  projectId: "ticketsystem-8616e",
  storageBucket: "ticketsystem-8616e.appspot.com",
  messagingSenderId: "299761369521"  
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AngularFireModule.initializeApp(FirebaseConfig.firebase),
  AngularFirestoreModule,
  AngularFireAuthModule,
  AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
