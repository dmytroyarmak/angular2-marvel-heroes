import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../shared/services/characters.service';

@Component({
  selector: 'mh-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {
  characters: any;
  nameStartsWith = '';
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

  onSearch(val) {
    this.nameStartsWith = val;
    this.loadCharactersList();
  }

  loadCharactersList() {
    this.charactersService
      .getCharacters({
        page: this.currentPage,
        perPage: this.itemsPerPage,
        nameStartsWith: this.nameStartsWith
      })
      .subscribe((characters) => {
        this.characters = characters;
      });
  }
}
