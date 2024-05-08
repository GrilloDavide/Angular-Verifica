import { Component, Injectable } from '@angular/core';
import {  FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { CommonModule } from '@angular/common';
import { LoginServiceService } from '../login-service.service';



@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatButtonToggleModule, MatInputModule, FormsModule, CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})

@Injectable({
  providedIn: 'root'
})

export class LoginPageComponent {

  constructor(private loginService : LoginServiceService) {}

  show : boolean = false
  loginError : boolean = false

  form = {
    name : "",
    surname : "",
    email : "",
    username : "",
    password : "",
  }

   isFormValid(){
    if (this.form.username == "" || this.form.password == "") {
      this.loginError = true
      return false
    }
    else
      this.loginError = false
    return true
  }

  loginAttempt() {

    if(this.isFormValid())
      this.loginService.login(this.form.name, this.form.surname, this.form.email, this.form.username, this.form.password)

    
  }

  registerAttempt(){
    if(this.isFormValid())
      this.loginService.register(this.form.name, this.form.surname, this.form.email, this.form.username, this.form.password)
  }

  onSubmit(){
    this.loginAttempt()
  }


}
