import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { getPaginationModel, ITEM_TYPES } from 'ultimate-pagination';

@Component({
  selector: 'ultimate-pagination',
  templateUrl: './ultimate-pagination.component.html',
  styleUrls: ['./ultimate-pagination.component.css']
})
export class UltimatePaginationComponent implements OnInit {
  @Input() currentPage;
  @Input() totalPages;
  @Output() change = new EventEmitter();
  ITEM_TYPES = ITEM_TYPES;

  constructor() {}

  ngOnInit() {
  }

  getPaginationModel() {
    return getPaginationModel({
      currentPage: this.currentPage,
      totalPages: this.totalPages
    });
  }

  onSelectPage(newPage) {
    if (newPage !== this.currentPage) {
      this.change.next(newPage);
    }
  }

}
