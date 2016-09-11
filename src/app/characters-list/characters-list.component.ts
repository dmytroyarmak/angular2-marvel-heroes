import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../shared/services/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.sass']
})
export class CharactersListComponent implements OnInit {
  characters: any;

  constructor(private charactersService: CharactersService) { }

  ngOnInit() {
    this.charactersService
      .getCharacters()
      .subscribe((characters) => {
        this.characters = characters;
      });
  }

}
