import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackendAccessService } from '.././backend-access.service';
 
@Component({
  selector: 'app-contactus',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
 
 
  title = 'angularexpress';
  userList : any =[];
  data : any;
  expresponse : string = " ";
  constructor(private http : HttpClient, private baccess : BackendAccessService ){
  }
  getAllUsers(){
    this.userList = this.baccess.getAllUsers();
  }
 
  addUser(udata : any){
    this.expresponse = this.baccess.addUser(udata);
   
  }
}