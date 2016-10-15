import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../shared/services/comics.service';

@Component({
  selector: 'comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})
export class ComicsListComponent implements OnInit {
  comics: any;
  titleStartsWith = '';
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
    this.titleStartsWith = val;
    this.loadComicsList();
  }

  loadComicsList() {
    this.comicsService
      .getComics({
        page: this.currentPage,
        perPage: this.itemsPerPage,
        titleStartsWith: this.titleStartsWith
      })
      .subscribe((comics) => {
        this.comics = comics;
      });
  }
}
