import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DevelopperComponent } from './developper/developper.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';

const ROUTES = [
  { path: 'signup', component: SignupComponent },
  { path: 'user', component: UserProfileComponent },
  { path: '', component: UserProfileComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dev', component: DevelopperComponent },
  { path: 'cocktail', component: CocktailListComponent },
];

export default ROUTES;
