import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenue sur le site de Maxime Auneau !';
  onomatopoeiaList: string[] = [];

  onReceiveNewOnomatopia(event: string) {
    // make the onomatopoeiaList array grow with the input value
    this.onomatopoeiaList.push(event);
  }
}
