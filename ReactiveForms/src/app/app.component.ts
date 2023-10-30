import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveforms';
  userList : any = [];
  editingUser: any = null;
  addUser(udata : any){
    console.log(udata);
    console.log(udata.value);
    this.userList.push(udata.value);
  }
 
  editUser(user: any) {
    this.editingUser = user;
  }
 
  updateUser(editForm: any) {
    // Update user logic here
    this.editingUser = null;
  }
 
  cancelEdit() {
    this.editingUser = null;
  }
 
  deleteUser(user: any) {
    // Implement delete functionality here
    // You can remove the user from the userList array
    const index = this.userList.indexOf(user);
    if (index !== -1) {
      this.userList.splice(index, 1);
    }
  }
 
 
 
}