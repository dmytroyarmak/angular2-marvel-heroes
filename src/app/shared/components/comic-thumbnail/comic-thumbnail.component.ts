import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'comic-thumbnail',
  templateUrl: './comic-thumbnail.component.html',
  styleUrls: ['./comic-thumbnail.component.css']
})
export class ComicThumbnailComponent implements OnInit {
  @Input() comic;

  constructor() { }

  ngOnInit() {
  }

  getThumbnailUrl() {
    return `${this.comic.thumbnail.path}.${this.comic.thumbnail.extension}`;
  }
}
