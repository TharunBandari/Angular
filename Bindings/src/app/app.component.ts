import { Component } from '@angular/core';
import { UserData } from './UserData';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  udata: UserData = new UserData();
  usersList: UserData[] = []; //array of UserData objects
  //userDetails : string[] = [];
  title = 'bindings';
  themeName : string = 'forest' ;
  col : string = "violet";
  size : number = 100;
  firstName: string='Aymen';
  lastName: string='Naqash';
  enableDisable: boolean=false;
  stateName: string="AP";
 
  saveData(event:Event){
    this.usersList.push(this.udata);
    console.log("Added data to array...");
    console.log(this.udata);
    this.udata=new UserData();
  };
  checkData(){
    //console.log(event.target);
    console.log(this.udata.firstName.length);
  }
  sendData(){
    console.log("Sending Data to Express Backend");
    //final validation
    //communicating with backend
  }
}