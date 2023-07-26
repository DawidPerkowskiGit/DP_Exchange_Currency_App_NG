import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-body',
  templateUrl: './request-body.component.html',
  styleUrls: ['./request-body.component.scss']
})
export class RequestBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  success: boolean = false;

  date: Date = new Date();

  base: string = "";

  

}
