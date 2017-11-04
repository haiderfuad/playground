import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app component';
  myObject = {
    gender: 'male',
    age: 33,
    location: 'UK'
  }
  ngLogo = 'assets/angular4.png';
  buttonStatus='enabled';
  classBinding='className'
  // classBinding=false;
  classesBinding = {
    class1:true,
    class2:true,
    class3:'className3' //doesn't work this way
  }
}
