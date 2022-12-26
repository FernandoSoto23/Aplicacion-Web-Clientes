import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { yearsPerPage } from '@angular/material/datepicker/typings/multi-year-view';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Fecha : any = new Date().getFullYear();

  
  constructor() {
    
  }

  ngOnInit(): void {
  }

}
