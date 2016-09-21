import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

export interface IGetCharactersOptions {
  page: number;
  perPage: number;
  nameStartsWith: string;
}

@Injectable()
export class CharactersService {

  constructor(private http: Http) { }

  getCharacters(options: IGetCharactersOptions) {
    // TODO: Move to global constants/config
    return this.http.get('http://gateway.marvel.com/v1/public/characters', {
      search: this.getCharactersSearchParams(options)
    }).map(responce => responce.json());
  }

  private getCharactersSearchParams(options: IGetCharactersOptions) {
    let charactersSearchParams = new URLSearchParams();
    // TODO: Add API key globally for all requests to Marvel Comics API
    charactersSearchParams.set('apikey', 'e82e1f8eb16da85c0260676f2cdb05b2');
    charactersSearchParams.set('limit', String(options.perPage));
    charactersSearchParams.set('offset', String(options.perPage * (options.page - 1)));
    if (options.nameStartsWith) {
      charactersSearchParams.set('nameStartsWith', options.nameStartsWith);
    }
    return charactersSearchParams;
  }
}
