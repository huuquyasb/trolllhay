import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserService } from './user.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardGuard } from './authguard.guard';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCKu38ZXYlpr3v1aot3nqp5ux93O-GJ-j8',
  authDomain: 'trollhay-88c51.firebaseapp.com',
  databaseURL: 'https://trollhay-88c51.firebaseio.com',
  projectId: 'trollhay-88c51',
  storageBucket: 'trollhay-88c51.appspot.com',
  messagingSenderId: '81450779138'
};

const appRoutes: Routes = [
  { path: 'contact', component: ContactsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', canActivate: [AuthguardGuard], component: DashboardComponent },
  { path: '', component: HomeComponent },
  // { path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // },
  { path: '**', component: PagenotfoundComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    LoginComponent,
    RegisterComponent,
    PagenotfoundComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [UserService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
