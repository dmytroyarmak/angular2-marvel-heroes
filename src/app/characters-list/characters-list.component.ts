import { Component, OnInit } from '@angular/core';

import { EntitiesService } from '../shared/services/entities.service';
import { CharactersService } from '../shared/services/characters.service';

@Component({
  selector: 'mh-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
  providers: [
    {provide: EntitiesService, useClass: CharactersService}
  ]
})
export class CharactersListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
