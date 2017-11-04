import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css'],
  animations: [
    trigger('myAnimation',[
      state('small', style({
        transform: 'scale(1)'
      })),
      state('big', style({
        transform: 'scale(1.5)'
      })),
      transition('small <=> big', animate('300ms ease-in', style({
        transform: 'translateY(40px)'
      })))
    ]),
    trigger('myOpac', [
      state('small', style({
        transform: 'scale(1)'
      })),
      state('big', style({
        transform: 'scale(1.3)'
      })),
      transition('small <=> big', animate('300ms ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(0)', offset: 0}),
        style({opacity: 0.5, transform: 'translateY(10px)', offset: 0.5}),
        style({opacity: 0, transform: 'translateY(20px)', offset: 1})
      ])))
    ])
  ]
})
export class MyNewComponentComponent implements OnInit {
  myArr = ['him', 'her', 'your'];

  clickEvent(event) {
    console.log(event);
  }

  styleBinding1= 'lightblue';
  styleBinding2 = true;
  styleBindingObj = {
    'color':'grey',
    'font-style':'italic'
  }

  constructor(private dataService: DataService) { }

  someProperty: string = '';
  carArr: string[] = null;

  ngOnInit() {
    console.log(this.dataService.car);
    this.carArr = this.dataService.car;
    this.someProperty = this.dataService.myData();
  }

  anim: string = 'small';
  animateMe() {
    this.anim = (this.anim === 'small' ? 'big' : 'small');
  }

  opac: string = 'small';
  myOpac() {
    this.opac = (this.opac === 'small' ? 'big' : 'small');
  }

}
