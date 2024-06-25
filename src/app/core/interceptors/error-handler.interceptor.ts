import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ErrorHandlersUtilitiesService } from '../utilities/error-handlers-utilities.service';

/**
 * Adds a default error handler to all requests.
 */
@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(
    public errorHandlersUtilitiesService: ErrorHandlersUtilitiesService,
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return next
      .handle(request)
      .pipe(catchError((error) => this.errorHandler(error)));
  }

  // Customize the default error handler here if needed
  private errorHandler(
    error: HttpResponse<any>,
  ): Observable<HttpResponse<any>> {
    // pemission
    if (error.status == 401) {
      this.errorHandlersUtilitiesService.triggerErrorToastAuth(error);
    }
    if (error.status == 403) {
      this.errorHandlersUtilitiesService.triggerErrorModal(error);
    }
    // not found
    if (error.status == 404) {
      this.errorHandlersUtilitiesService.triggerErrorToast(error);
    }
    // fields required
    if (error.status == 422 || error.status == 400) {
      this.errorHandlersUtilitiesService.triggerErrorToast(error);
    }
    // internal server error
    if (error.status == 500) {
      console.log(error);
      this.errorHandlersUtilitiesService.triggerErrorModal(error);
    }
    if (!environment.production) {
      // Do something with the error
    }

    throw error;
  }
}
