import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ultimate-pagination',
  templateUrl: './ultimate-pagination.component.html',
  styleUrls: ['./ultimate-pagination.component.sass']
})
export class UltimatePaginationComponent implements OnInit {
  @Input() currentPage;
  @Input() totalPages;
  @Output() onChnage = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
