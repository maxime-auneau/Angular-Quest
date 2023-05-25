import { Component } from '@angular/core';
import {UserModel} from "./User.model";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  newUser: UserModel = new UserModel("", "", "", "");
  constructor() { }
  onSubmit(): void {
    // Formulaire envoyé
    console.log(this.newUser);
  }
}
