import { Component, OnInit } from '@angular/core';

import { MyFactoryService } from './my-factory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    private myFactoryService: MyFactoryService
  ){}

  debbyDowner = false;
  showZoidberg = false;
  money = 69;

  imgUrl = 'http://s2.quickmeme.com/img/da/daff28bf181a7ca0fb27da5798295233c3a188c2a49a796f1434fe787cfca7fd.jpg';

  favoriteCartoon = 'Futurama';

  characters = [
    {
      name: 'Zoidberg',
      age: 58
    },
    {
      name: 'Professor Farnsworth',
      age: 190
    },
    {
      name: 'Philip J Fry',
      age: 32
    },
    {
      name: 'Bender',
      age: 8
    }
  ];

  woopWoopWoop() {
    console.log('zoidberg');
    this.showZoidberg = !this.showZoidberg;
  }

  ngOnInit(){
    this.myFactoryService.easterEgg();
  }


}
