import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {SignupComponent} from "./signup/signup.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";

const ROUTES = [
  { path: 'signup', component: SignupComponent },
  { path: 'user', component: UserProfileComponent},
  { path: '', component: UserProfileComponent },
  { path: 'home', component: HomeComponent },
]

export default ROUTES;
