import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  car = [
    'Ford', 'Buick', 'Chevrolet'
  ];

  myData() {
    return 'This is from app service!';
  }

}
