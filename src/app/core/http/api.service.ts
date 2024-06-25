import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IConfig } from '../../shared/interfaces/config';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  private url = '';

  constructor(public http: HttpClient) {
    this.url = `${environment.api}`;
  }

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams(),
      };
    }
    if (params) {
      reqOpts.params = new HttpParams();
      for (const k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }
    return this.http.get<IConfig>(this.url + '/' + endpoint, reqOpts);
  }
}
