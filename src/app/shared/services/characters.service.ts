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

  static CHARACTERS_ENDPOINT = 'http://gateway.marvel.com/v1/public/characters';

  constructor(private http: Http) { }

  getCharacter(id) {
    return this.http
      .get(CharactersService.CHARACTERS_ENDPOINT + '/' + id, {
        search: this.getBaseSearchParams()
      })
      .map(responce => responce.json())
      .map(body => body.data.results[0]);
  }

  getCharacters(options: IGetCharactersOptions) {
    return this.http.get(CharactersService.CHARACTERS_ENDPOINT, {
      search: this.getCharactersSearchParams(options)
    }).map(responce => responce.json());
  }

  private getBaseSearchParams() {
    let baseSearchParams = new URLSearchParams();
    // TODO: Add API key globally for all requests to Marvel Comics API
    baseSearchParams.set('apikey', 'e82e1f8eb16da85c0260676f2cdb05b2');
    return baseSearchParams;
  }

  private getCharactersSearchParams(options: IGetCharactersOptions) {
    let charactersSearchParams = this.getBaseSearchParams();
    charactersSearchParams.set('limit', String(options.perPage));
    charactersSearchParams.set('offset', String(options.perPage * (options.page - 1)));
    if (options.nameStartsWith) {
      charactersSearchParams.set('nameStartsWith', options.nameStartsWith);
    }
    return charactersSearchParams;
  }
}
