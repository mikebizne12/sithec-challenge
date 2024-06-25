import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/shared/interfaces/character';
import { CharacterService } from '../../../../core/services/character.service';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-view-episode-character',
  templateUrl: './view-episode-character.component.html',
  styleUrls: ['./view-episode-character.component.scss'],
})
export class ViewEpisodeCharacterComponent implements OnInit {
  ids: Array<number> = [];
  loading = true;
  allLoaded = false;
  data: Array<ICharacter> = [];
  constructor(
    private characterService: CharacterService,
    private dialogConfig: DynamicDialogConfig,
  ) {}

  ngOnInit(): void {
    this.ids = this.dialogConfig.data.ids;
    this.characterService
      .getMultiplerCharacter(this.ids)
      .subscribe((resp: any) => {
        this.data = resp;
        this.loading = false;
      });
  }
}
