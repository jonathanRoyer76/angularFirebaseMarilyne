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
      apiKey: "AIzaSyCwvhcwGXTWN7ARLvu_D7DyVW94pmAGD9Q",
      authDomain: "marilyne-angular.firebaseapp.com",
      databaseURL: "https://marilyne-angular.firebaseio.com",
      projectId: "marilyne-angular",
      storageBucket: "marilyne-angular.appspot.com",
      messagingSenderId: "78648895238"
    };
    firebase.initializeApp(config); 
    const firestore = firebase.firestore();
    const settings = {timestampsInSnapshots: true};
    firestore.settings(settings); 
  }
}
