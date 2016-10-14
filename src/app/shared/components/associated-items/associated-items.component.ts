import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'associated-items',
  templateUrl: './associated-items.component.html',
  styleUrls: ['./associated-items.component.css']
})
export class AssociatedItemsComponent implements OnInit {
  @Input() title: string;
  @Input() collection: [any];

  constructor() { }

  ngOnInit() {
  }

}
