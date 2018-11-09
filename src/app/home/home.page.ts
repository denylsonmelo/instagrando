import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  slideOpts = {
    effect: 'flip',
    slidesPerView: 6,
    spaceBetween: 30
  };

  stories: Array<any> = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ];

  posts: Array<any> = [
    {}, // objeto vazio
    {}, // objeto vazio
    {}, // objeto vazio
    {}, // objeto vazio
    {}, // objeto vazio
    {}, // objeto vazio
  ];
}
