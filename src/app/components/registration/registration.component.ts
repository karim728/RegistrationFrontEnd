import { Component, OnInit,ViewChild } from '@angular/core';
import {RegistrationService} from '../../services/registration.service'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
   firstName="";
   lastName="";
   email="";
   userName="";
   password="";
   user;
  //  myForm: FormGroup;
   @ViewChild('formDirective') private formDirective;

  constructor(private registrationService : RegistrationService) { }

  ngOnInit(): void {
    
  }

  submit(e){
    this.user ={
      firstname : this.firstName,
      lastname  : this.lastName,
      email     : this.email,
      username  : this.userName,
      password  : this.password
    }

    if(this.firstName==null || this.lastName==null || this.email==null || this.userName==null || this.password==null){
      alert("all fields most be completed")
    }else{
          this.registrationService.registerData(this.user);
    
          this.formDirective.resetForm();
          
    }


  }

}
