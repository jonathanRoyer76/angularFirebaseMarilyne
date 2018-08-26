import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(){
    const config = {
      apiKey: "AIzaSyDhV8nVBIu81DVQ7LnSUXIfT2tagiye7X8",
      authDomain: "marilyne-royer.firebaseapp.com",
      databaseURL: "https://marilyne-royer.firebaseio.com",
      projectId: "marilyne-royer",
      storageBucket: "marilyne-royer.appspot.com",
      messagingSenderId: "972596999367"
    };
    firebase.initializeApp(config); 
    const firestore = firebase.firestore();
    const settings = {timestampsInSnapshots: true};
    firestore.settings(settings); 
  }
}
