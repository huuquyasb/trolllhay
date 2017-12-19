import { Component, OnInit, HostBinding  } from '@angular/core';
import { Route } from '@angular/router/src/config';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: any;
  constructor(private afs: AngularFireAuth, private router: Router, private user: UserService) {
    this.afs.auth.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl('/dashboard');
      }
    });
   }

  ngOnInit() {
  }
  loginUser(formLogin) {
    // console.log(formLogin.value);
    const username = formLogin.value.username;
    const password = formLogin.value.password;

    if (username === 'huuquy@gmail.com' && password === '2008') {
      this.user.setUserLoggedIn();
      this.router.navigate(['dashboard']);
    }
    // throw new Error('Form is in valid');
  }
  loginFb() {
    this.afs.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    }).then(
        (success) => {
        this.router.navigate(['/members']);
      }).catch(
        (err) => {
        this.error = err;
      })
  }

}
