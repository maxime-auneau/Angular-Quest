import { Component, OnInit } from '@angular/core';
import { HelloWorldService } from './services/hello-world.service';
import { NasaService } from './services/nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Bienvenue sur le site de Maxime Auneau !';
  test = '';
  onomatopoeiaList: string[] = [];
  public imgOfTheDay: any;
  constructor(public helloWorldService: HelloWorldService, public NasaService: NasaService) {}

  ngOnInit(): void {
    this.test = this.helloWorldService.getHelloWorld();
    this.NasaService.getImageOfTheDay().subscribe((param_img: any) => {
      this.imgOfTheDay = param_img;
    });
  }

  onReceiveNewOnomatopia(event: string) {
    this.onomatopoeiaList.push(event);
  }
}
