import {Component, OnInit} from '@angular/core';
import {DevelopperModel} from "../models/developper.model";

@Component({
  selector: 'app-developper',
  templateUrl: './developper.component.html',
  styleUrls: ['./developper.component.css']
})
export class DevelopperComponent implements OnInit {
  dev: DevelopperModel = new DevelopperModel (
    'Doe',
    'John',
    25,
    'M',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit.',
    [
      {
        name: 'HTML',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2000px-HTML5_logo_and_wordmark.svg.png',
        site: 'https://www.w3.org/html/'
      },
      {
        name: 'CSS',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/2000px-CSS3_logo_and_wordmark.svg.png',
        site: 'https://www.w3.org/Style/CSS/'
      },
      ]
  )

  ngOnInit(): void {
  }
}
