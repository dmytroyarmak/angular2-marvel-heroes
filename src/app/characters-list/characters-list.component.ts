import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../shared/services/characters.service';
import { CharactersListItemComponent } from '../characters-list-item/characters-list-item.component';

@Component({
  selector: 'characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.sass'],
  directives: [CharactersListItemComponent]
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
