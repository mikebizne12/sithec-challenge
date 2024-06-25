import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FunctionsUtilitiesService {
  static max_size = 1024 * 1024 * 100;

  static removeAttrEmpty(obj: any) {
    let _self = this;
    Object.keys(obj).forEach(function (key) {
      (obj[key] &&
        typeof obj[key] === 'object' &&
        _self.removeAttrEmpty(obj[key])) ||
        ((obj[key] === '' || obj[key] === null || obj[key] === undefined) &&
          delete obj[key]);
    });
    return obj;
  }
}
