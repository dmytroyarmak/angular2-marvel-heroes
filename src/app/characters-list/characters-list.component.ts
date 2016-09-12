import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../shared/services/characters.service';
import { CharactersListItemComponent } from '../characters-list-item/characters-list-item.component';
import { UltimatePaginationComponent } from '../shared/components/ultimate-pagination/ultimate-pagination.component';

@Component({
  selector: 'characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.sass'],
  directives: [
    CharactersListItemComponent,
    UltimatePaginationComponent
  ]
})
export class CharactersListComponent implements OnInit {
  characters: any;
  currentPage: number = 1;
  itemsPerPage: number = 20;

  constructor(private charactersService: CharactersService) {
    this.currentPage = 1;
  }

  ngOnInit() {
    this.loadCharactersList();
  }

  getTotalPages() {
    if (this.characters) {
      return Math.ceil(this.characters.data.total / this.itemsPerPage);
    }
  }

  onChangePage(newPage) {
    this.currentPage = newPage;
    this.loadCharactersList();
  }

  loadCharactersList() {
    this.charactersService
      .getCharacters({
        page: this.currentPage,
        perPage: this.itemsPerPage
      })
      .subscribe((characters) => {
        this.characters = characters;
      });
  }
}
