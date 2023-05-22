import {Component, Input, OnInit} from '@angular/core';
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

  ngOnInit(): void {
  }

  showAge = () => {
    // make div visible or not when clicked on button in the css
    const age: HTMLElement | null = document.getElementById('age')!;
    if ("style" in age) {
      if (age.style.display === 'block') {
        age.style.display = 'none';
      } else {
        age.style.display = 'block';
      }
    }
  }
}
