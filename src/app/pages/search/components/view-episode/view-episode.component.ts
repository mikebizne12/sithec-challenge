import { Component, Input } from '@angular/core';
import { IConfig } from 'src/app/shared/interfaces/config';
import { IInfo } from 'src/app/shared/interfaces/info';
import { IResult } from 'src/app/shared/interfaces/result';
import { ViewEpisodeCharacterComponent } from '../view-episode-character/view-episode-character.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-view-episode',
  templateUrl: './view-episode.component.html',
  styleUrls: ['./view-episode.component.scss'],

  providers: [DialogService],
})
export class ViewEpisodeComponent {
  results: Array<IResult> = [];
  info: IInfo = { count: 0, pages: 0, current_page: 1 };
  @Input() data: IConfig = { info: this.info, results: this.results };

  ref: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService) {}

  viewCharacters(items: IResult) {
    this.ref = this.dialogService.open(ViewEpisodeCharacterComponent, {
      header: 'Characters',
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: {
        ids: this.getIds(items.characters || []),
      },
    });
  }

  private getIds(characters: Array<string>) {
    const ids = [];
    for (const result of characters) {
      ids.push(+result.substring(result.lastIndexOf('/') + 1));
    }
    return ids;
  }
}
