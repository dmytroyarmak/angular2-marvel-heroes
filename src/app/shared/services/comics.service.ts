import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

export interface IGetComicsOptions {
  page: number;
  perPage: number;
  titleStartsWith: string;
}

@Injectable()
export class ComicsService {

  static COMICS_ENDPOINT = 'http://gateway.marvel.com/v1/public/comics';

  constructor(private http: Http) { }

  getComic(id) {
    return this.http.get(ComicsService.COMICS_ENDPOINT + '/' + id, {
      search: this.getBaseSearchParams()
    }).map(responce => responce.json());
  }

  getComics(options: IGetComicsOptions) {
    return this.http.get(ComicsService.COMICS_ENDPOINT, {
      search: this.getComicsSearchParams(options)
    }).map(responce => responce.json());
  }

  private getBaseSearchParams() {
    let baseSearchParams = new URLSearchParams();
    // TODO: Add API key globally for all requests to Marvel Comics API
    baseSearchParams.set('apikey', 'e82e1f8eb16da85c0260676f2cdb05b2');
    return baseSearchParams;
  }

  private getComicsSearchParams(options: IGetComicsOptions) {
    let comicsSearchParams = this.getBaseSearchParams();
    comicsSearchParams.set('limit', String(options.perPage));
    comicsSearchParams.set('offset', String(options.perPage * (options.page - 1)));
    if (options.titleStartsWith) {
      comicsSearchParams.set('titleStartsWith', options.titleStartsWith);
    }
    return comicsSearchParams;
  }
}
