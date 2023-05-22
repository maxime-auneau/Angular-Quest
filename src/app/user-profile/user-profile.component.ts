import {Component, OnInit} from '@angular/core';
import {User} from "./User";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user = new User(
    'Doe',
    'John',
    25,
    'a dreamer is one who can only find his way by moonlight',
    'https://randomuser.me/api/portraits/lego/2.jpg'
  );


  userName: string = "User";
  isAdmin: boolean = false;

  ngOnInit(): void {
  }

  showAge = () => {
    const age: HTMLElement | null = document.getElementById('age')!;
    if ("style" in age) {
      if (age.style.display === 'block') {
        age.style.display = 'none';
      } else {
        age.style.display = 'block';
      }
    }
  }

  isAdminConnected = () => {
    this.isAdmin = !this.isAdmin;
    if (this.isAdmin) {
      this.userName = `Admin ${this.user.firstName} ${this.user.name}`;
    } else {
      this.userName = "User";
    }
  }
}
