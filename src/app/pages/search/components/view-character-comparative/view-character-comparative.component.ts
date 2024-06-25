import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/shared/interfaces/character';
import { CharacterService } from '../../../../core/services/character.service';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-view-character-comparative',
  templateUrl: './view-character-comparative.component.html',
  styleUrls: ['./view-character-comparative.component.scss'],
})
export class ViewCharacterComparativeComponent implements OnInit {
  ids: Array<number> = [];
  loading = true;
  data: Array<ICharacter> = [];
  charactersCommom: any = [];
  constructor(
    private characterService: CharacterService,
    private dialogConfig: DynamicDialogConfig,
  ) {}

  ngOnInit(): void {
    this.ids = this.dialogConfig.data.ids;

    this.characterService
      .getMultiplerCharacter(this.ids)
      .subscribe((resp: any) => {
        resp.forEach((element: any) => {
          this.charactersCommom.push({
            id: element.id,
            name: element.name,
            episodes: element.episode,
          });
        });
        this.data = resp;
        this.loading = false;
      });
  }

  getEpisodesCommon(basedata: Array<string>, comparedata: Array<string>) {
    const common: any = [];
    basedata.filter((d: any) => {
      comparedata.filter((s: any) => {
        if (d === s) {
          common.push(d);
        }
      });
    });
    return common;
  }
}
