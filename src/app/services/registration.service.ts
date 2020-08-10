import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

 URL : String ="http://localhost:3000/add";
 LOGIN :String ="http://localhost:3000/login";
 
registerData(data){
  return this.http.post('http://localhost:3000/add',data).subscribe(
    result =>{
      
      console.log("Data has been added"+ result)
    });
}
getAllUsers(){
  return this.http.get("http://localhost:3000/login")
}

} 


