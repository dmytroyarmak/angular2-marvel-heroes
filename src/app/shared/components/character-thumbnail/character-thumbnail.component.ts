import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'character-thumbnail',
  templateUrl: './character-thumbnail.component.html',
  styleUrls: ['./character-thumbnail.component.css']
})
export class CharacterThumbnailComponent implements OnInit {
  @Input() character;

  constructor() { }

  ngOnInit() {
  }

  getThumbnailUrl() {
    return `${this.character.thumbnail.path}.${this.character.thumbnail.extension}`;
  }
}
