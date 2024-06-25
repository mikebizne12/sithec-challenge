import { Component, Input } from '@angular/core';
import { IConfig } from 'src/app/shared/interfaces/config';
import { IInfo } from 'src/app/shared/interfaces/info';
import { ViewCharacterComparativeComponent } from '../view-character-comparative/view-character-comparative.component';
import { IResult } from 'src/app/shared/interfaces/result';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';
import { SetCharacter } from 'src/state/character.actions';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-view-character',
  templateUrl: './view-character.component.html',
  styleUrls: ['./view-character.component.scss'],
  providers: [DialogService, MessageService],
})
export class ViewCharacterComponent {
  results: Array<IResult> = [];
  info: IInfo = { count: 0, pages: 0, current_page: 1 };
  @Input() data: IConfig = { info: this.info, results: this.results };
  messages: Message[] | undefined;
  ref: DynamicDialogRef | undefined;
  constructor(
    public dialogService: DialogService,
    private store: Store,
    public messageService: MessageService,

    private router: Router,
  ) {}

  selectCharacter(character: any) {
    console.log(character);
    this.store.dispatch(new SetCharacter(character)).subscribe(() => {
      this.router.navigate(['/details']);
    });
  }

  validCheck(item: any) {
    item.compared = !item.compared;
    const total = this.checkLimitSelected();
    if (total === 3) {
      this.messages = [
        { severity: 'success', summary: 'Success', detail: 'Message Content' },
      ];
      this.messageService.add({
        severity: 'info',
        summary: 'Maximum 3 characters',
      });
    }
    if (total < 3) {
      this.data.results.filter((e) => {
        if (!e.compared) e.disabled = false;
      });
    } else {
      this.data.results.filter((e) => {
        if (!e.compared) e.disabled = true;
      });
    }
  }

  viewCompared() {
    this.ref = this.dialogService.open(ViewCharacterComparativeComponent, {
      header: 'Compare characters',
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: {
        ids: this.getIds(),
      },
    });
  }

  getIds() {
    return this.data.results.filter((x) => x.compared == true).map((x) => x.id);
  }

  private checkLimitSelected() {
    return this.data.results.reduce((n, e) => (e.compared ? n + 1 : n), 0);
  }
}
