import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'comics-list-item',
  templateUrl: './comics-list-item.component.html',
  styleUrls: ['./comics-list-item.component.css']
})
export class ComicsListItemComponent implements OnInit {
  @Input() comic;

  constructor() { }

  ngOnInit() {
  }
}
