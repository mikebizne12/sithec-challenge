import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  private domain: any;

  constructor(private loc: Location) {
    const angularRoute = this.loc.path();
    const url = window.location.hostname;
    this.domain = url.replace(angularRoute, '');
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const headersConfig: any = {
      Accept: 'application/json',
    };
    const request = req.clone({ setHeaders: headersConfig });
    return next.handle(request);
  }
}
