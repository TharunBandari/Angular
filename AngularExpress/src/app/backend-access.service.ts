import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendAccessService {
  userList : any =[];
  data :any;
  expresponse : string = " ";
  constructor(private http : HttpClient ){
  }
  getAllUsers(){
      this.http.get('http://localhost:8001/getAll').subscribe((response)=>{
        this.userList=response;
        console.log(this.userList);
      });
      return this.userList;
  }

  addUser(udata : any) : any{
    this.http.post('http://localhost:8001/insertUser', udata.value).subscribe((Response)=>{
      this.expresponse=Response.toString();
    });
    return this.expresponse;
  }
}

