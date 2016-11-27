import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {LoginService} from '../service/login.service';
import { FirebaseAuthState } from 'angularfire2';

@Component({
  selector: 'login',
  styles: [`
  `],
  templateUrl: './login.component.html',
  providers:[LoginService]
})
export class LoginComponent{
  mail:string;
  password:string;
  errorMessage:string;

  constructor(public route: ActivatedRoute, private loginService: LoginService) {
  }



  ngOnInit(){
    this.errorMessage = "";
  }

  onSubmit(){
    this.errorMessage = "";
    
    this.loginService.login(this.mail, this.password)
    .then(()=>{
      window.location.href = "#/";
    }).catch((e)=>{
      this.errorMessage = e.message;
    });
  }

}