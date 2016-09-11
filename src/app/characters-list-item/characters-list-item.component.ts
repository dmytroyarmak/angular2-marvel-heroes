import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'characters-list-item',
  templateUrl: './characters-list-item.component.html',
  styleUrls: ['./characters-list-item.component.sass']
})
export class CharactersListItemComponent implements OnInit {
  @Input() character;

  constructor() { }

  ngOnInit() {
  }

  getThumbnailUrl() {
    return `${this.character.thumbnail.path}.${this.character.thumbnail.extension}`;
  }
}
