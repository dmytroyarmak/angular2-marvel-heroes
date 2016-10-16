import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

export interface IGetListOptions {
  page: number;
  perPage: number;
  query: string;
}

export abstract class EntitiesService {
  abstract endpointUrl;
  abstract searchParamName;

  constructor(private http: Http) {
  }

  get(id) {
    return this.http
      .get(this.endpointUrl + '/' + id, {
        search: this.getBaseSearchParams()
      })
      .map(responce => responce.json())
      .map(body => body.data.results[0]);
  }

  getList(options: IGetListOptions) {
    return this.http.get(this.endpointUrl, {
      search: this.getListSearchParams(options)
    }).map(responce => responce.json());
  }

  private getBaseSearchParams() {
    let baseSearchParams = new URLSearchParams();
    // TODO: Add API key globally for all requests to Marvel Entities API
    baseSearchParams.set('apikey', 'e82e1f8eb16da85c0260676f2cdb05b2');
    return baseSearchParams;
  }

  private getListSearchParams(options: IGetListOptions) {
    let searchParams = this.getBaseSearchParams();
    searchParams.set('limit', String(options.perPage));
    searchParams.set('offset', String(options.perPage * (options.page - 1)));
    if (this.searchParamName && options.query) {
      searchParams.set(this.searchParamName, options.query);
    }
    return searchParams;
  }
}
