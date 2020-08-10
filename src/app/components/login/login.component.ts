import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../../services/registration.service'
import {MatDialog} from '@angular/material/dialog';
import { AlertComponent } from '../../modals/alert/alert.component';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username : String;
  password : String;
  users;

  constructor(private registrationService : RegistrationService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.registrationService.getAllUsers().subscribe(
      result =>{
        console.log( result)
        this.users = result;
      });;
     setTimeout(() => {
       console.log(this.users)
     }, 1000);
      
  }

  submit(){
    if(this.username==null ||  this.password==null){
       console.log("empty")
       this.dialog.open(AlertComponent)
    }else{
      
      //for(let x of this.users){
        if(this.check()){
          console.log("log in")
          alert("Login Successfully")
          
        }else{
          console.log("please register")
          this.dialog.open(AlertComponent)
        }
      //}
    }
  }

  openDialog() {
    //this.dialog.open(`DialogElementsExampleDialog`);
  }

   check() : boolean{
    for(let x of this.users){
      if(x.username == this.username && x.password == this.password){
        console.log("log in")
        return true
      }
    }
    return false;
  }

}
