import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: false,
  
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})



export class LoginFormComponent {
  
  email?:string
password?:string
message?:string

constructor(private userService:UserService, private router: Router ){
}

onSubmit(form:NgForm){
  if (form.valid) {
    this.email = form.value.email
    this.password = form.value.password
  
    if (this.userService.login(this.email,this.password)) {
      alert('Connexion réussie')
      this.router.navigate(['/'])
    }else{
      alert('Identifiant incorrect')
    }
    
  }
}
}
