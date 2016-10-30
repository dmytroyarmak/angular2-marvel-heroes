import { Component, OnInit, Input } from '@angular/core';
import { EntitiesService } from '../../services/entities.service';

@Component({
  selector: 'mh-entities-list',
  templateUrl: './entities-list.component.html',
  styleUrls: ['./entities-list.component.css']
})
export class EntitiesListComponent implements OnInit {
  @Input() title: string;
  entities: any;
  query: string = '';
  page: number = 1;
  perPage: number = 20;

  constructor(private entitiesService: EntitiesService) { }

  ngOnInit() {
    this.loadEntitiesList();
  }

  getTotalPages() {
    if (this.entities) {
      return Math.ceil(this.entities.data.total / this.perPage);
    }
  }

  onChangePage(newPage) {
    this.page = newPage;
    this.loadEntitiesList();
  }

  onSearch(query) {
    this.query = query;
    this.page = 1;
    this.loadEntitiesList();
  }

  loadEntitiesList() {
    this.entitiesService
      .getList({
        page: this.page,
        perPage: this.perPage,
        query: this.query
      })
      .subscribe((entities) => {
        this.entities = entities;
      });
  }
}
