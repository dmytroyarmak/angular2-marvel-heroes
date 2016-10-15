import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mh-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {
  @Input() image;
  @Input() alt: string;

  constructor() { }

  ngOnInit() {
  }

  getThumbnailUrl() {
    return `${this.image.path}.${this.image.extension}`;
  }
}
