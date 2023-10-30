import { Component } from '@angular/core';
import {OnInit} from '@angular/core'
import { OnDestroy } from '@angular/core';
import { DoCheck,AfterContentChecked } from '@angular/core';
import { AfterContentInit } from '@angular/core';
import { AfterViewChecked } from '@angular/core';
import { AfterViewInit } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, AfterContentInit,
DoCheck, AfterViewChecked, AfterViewInit, AfterContentChecked {
   firstName : string='Unknown';
   lastName : string='Unknown';
 
  ngAfterContentChecked(): void { //step-4
   
    console.log("Content Checked");
  }
  ngAfterViewInit(): void { //step-5
    console.log("View Initialization completed.");
 
  }
  ngAfterViewChecked(): void { //step-6
   
    console.log("View checking completed.");
   
  }
  ngDoCheck(): void { //step-2 Exected whenever the view changes every time view changes
   
    console.log("Overall verification or validation started");
   
  }
  ngAfterContentInit(): void { //step-3
   
    console.log("Content Initialization completed.");
   
  }
  ngOnDestroy(): void {
    //Write the code for connecting to the backend to save the data.
    // before component gets destroyed.
    console.log("Component destroyed at " + new Date());
  }
  ngOnInit(): void { //step-1
    //Write the code the for connecting to the backend and fetch data.
   
    var today =new Date();
    console.log("Component getting initialized at" + today);
  }
  title = 'ComponentLifeCycle';
}