import { Component } from '@angular/core';
// By default angular follows external style sheet.
@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',              //External View
  template: '<div style= "color:magenta"><b>Welcome to Angular</b><u>Introduction to Angular</u></div>', //Internal View
  //styleUrls: ['./app.component.css']              //External Style Sheet
  styles: ['b{color:green}','div{color:cyan}']    //Internal Style Sheet
})
export class AppComponent {
  title = 'First website in ANGULAR';
  name :string='Tharun';//
}
