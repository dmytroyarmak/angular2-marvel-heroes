import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'characters-list-item',
  templateUrl: './characters-list-item.component.html',
  styleUrls: ['./characters-list-item.component.css']
})
export class CharactersListItemComponent implements OnInit {
  @Input() character;

  constructor() { }

  ngOnInit() {
  }
}
