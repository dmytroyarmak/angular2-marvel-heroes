import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

@Injectable()
export class CharactersService {

  constructor(private http: Http) { }

  getCharacters() {
    // TODO: Move to global constants/config
    return this.http.get('http://gateway.marvel.com/v1/public/characters', {
      search: this.getCharactersSearchParams()
    }).map(responce => responce.json());
  }

  private getCharactersSearchParams() {
    // TODO: Add API key globally for all requests to Marvel Comics API
    let charactersSearchParams = new URLSearchParams();
    charactersSearchParams.set('apikey', 'e82e1f8eb16da85c0260676f2cdb05b2');
    return charactersSearchParams;
  }
}
