import { Component, OnInit } from '@angular/core';
import { HelloWorldService } from './services/hello-world.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Bienvenue sur le site de Maxime Auneau !';
  test = '';
  onomatopoeiaList: string[] = [];
  constructor(public helloWorldService: HelloWorldService) {}

  ngOnInit(): void {
    this.test = this.helloWorldService.getHelloWorld();
  }

  onReceiveNewOnomatopia(event: string) {
    this.onomatopoeiaList.push(event);
  }
}
