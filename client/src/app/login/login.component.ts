import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router/src/config';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private user: UserService) { }

  ngOnInit() {
  }
  loginUser(formLogin) {
    //console.log(formLogin.value);
    var username = formLogin.value.username;
    var password = formLogin.value.password;

    if (username == "huuquy@gmail.com" && password == "2008") {
      this.user.setUserLoggedIn();
      this.router.navigate(['dashboard']);
    }
    //throw new Error('Form is in valid');   
  }

}
