import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../shared/services/comics.service';

@Component({
  selector: 'mh-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})
export class ComicsListComponent implements OnInit {
  comics: any;
  query = '';
  currentPage: number = 1;
  itemsPerPage: number = 20;

  constructor(private comicsService: ComicsService) {
    this.currentPage = 1;
  }

  ngOnInit() {
    this.loadComicsList();
  }

  getTotalPages() {
    if (this.comics) {
      return Math.ceil(this.comics.data.total / this.itemsPerPage);
    }
  }

  onChangePage(newPage) {
    this.currentPage = newPage;
    this.loadComicsList();
  }

  onSearch(val) {
    this.query = val;
    this.loadComicsList();
  }

  loadComicsList() {
    this.comicsService
      .getList({
        page: this.currentPage,
        perPage: this.itemsPerPage,
        query: this.query
      })
      .subscribe((comics) => {
        this.comics = comics;
      });
  }
}
