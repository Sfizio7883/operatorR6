import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    var firebaseConfig = {
      apiKey: "AIzaSyCHl9P7MYIucQKNMJF0c4ewOq0CjhlY7jg",
      authDomain: "operatorr6-df126.firebaseapp.com",
      databaseURL: "https://operatorr6-df126.firebaseio.com",
      projectId: "operatorr6-df126",
      storageBucket: "operatorr6-df126.appspot.com",
      messagingSenderId: "779804571815",
      appId: "1:779804571815:web:40d8d5c0dc7401cd2c0382",
      measurementId: "G-HBXLZLZ6J9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
