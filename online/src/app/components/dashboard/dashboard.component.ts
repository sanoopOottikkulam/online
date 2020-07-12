import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit() { this.setDimension()}

  colArray = [];
  rowArray = [];
  colums = 5;
  rows = 5;
  setDimension(){
     this.colArray = [];
     this.rowArray = [];
     for(let i = 0; i<this.colums; i++){
       this.colArray.push(i);
     }
     for(let i = 0; i<this.rows; i++){
       this.rowArray.push(i);
     }
   }

}
