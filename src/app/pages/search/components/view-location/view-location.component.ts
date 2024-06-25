import { Component, Input } from '@angular/core';
import { IConfig } from 'src/app/shared/interfaces/config';
import { IInfo } from 'src/app/shared/interfaces/info';
import { IResult } from 'src/app/shared/interfaces/result';

@Component({
  selector: 'app-view-location',
  templateUrl: './view-location.component.html',
  styleUrls: ['./view-location.component.scss'],
})
export class ViewLocationComponent {
  results: Array<IResult> = [];
  info: IInfo = { count: 0, pages: 0, current_page: 1 };
  @Input() data: IConfig = { info: this.info, results: this.results };

  getTotal(items: Array<string>) {
    return items.length;
  }
}
