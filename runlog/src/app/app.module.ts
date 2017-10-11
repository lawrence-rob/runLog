import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


//Components
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RunsComponent } from './components/runs/runs.component';


const appRoutes: Routes = [
  {path:'', component:AboutComponent},
  {path:'dashboard', component:DashboardComponent}
];


export const firebaseConfig = {
  apiKey: "AIzaSyDlD4-bVmu8TMyDrAejV4sZYIOxckPW4f4",
  authDomain: "runlog-cfbd9.firebaseapp.com",
  databaseURL: "https://runlog-cfbd9.firebaseio.com",
  storageBucket: "runlog-cfbd9.appspot.com",
  messagingSenderId: "988428639124"
} 

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavbarComponent,
    DashboardComponent,
    RunsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
