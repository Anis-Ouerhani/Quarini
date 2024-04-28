import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  inforUsers: any; 
  currentUser: any; 
  id: any; 
  constructor() { }

  ngOnInit(): void { }
}
