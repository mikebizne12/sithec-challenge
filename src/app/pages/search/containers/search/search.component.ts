import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ICharacter } from 'src/app/shared/interfaces/character';
import { IConfig } from 'src/app/shared/interfaces/config';
import { IInfo } from 'src/app/shared/interfaces/info';
import { CharacterService } from '../../../../core/services/character.service';
import { EpisodeService } from '../../../../core/services/episode.service';
import { FunctionsUtilitiesService } from '../../../../core/utilities/functions-utilities.service';
import { LocationService } from '../../../../core/services/location.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  value = 1;
  CHARACTER = 1;
  LOCATION = 2;
  EPISODE = 3;
  notFound = false;
  open = false;
  loading = false;
  results: Array<ICharacter> = [];
  info: IInfo = { count: 0, pages: 0, current_page: 1 };
  data: IConfig = { info: this.info, results: this.results };

  filters: Array<any> = [
    { value: 1, name: 'Character' },
    { value: 2, name: 'Location' },
    { value: 3, name: 'Episode' },
  ];

  formSearch!: UntypedFormGroup;

  constructor(
    private characterService: CharacterService,
    private locationService: LocationService,
    private episodeService: EpisodeService,
    private formBuilder: UntypedFormBuilder,
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.getList();
  }

  onFilter() {
    this.formSearch.controls['selector'].setValue(this.value);
    this.createForm();

    this.setPage({ page: 1 });
  }

  onSearch() {
    this.setPage({ page: 1 });
  }

  setPage(page: any) {
    this.formSearch.controls['page'].setValue(page.page);
    this.info.current_page = page.page;
    this.getList();
    this.scrollToTop();
  }

  getList() {
    this.data = { info: { count: 0, pages: 0, current_page: 1 }, results: [] };
    this.loading = true;

    if (this.value === this.CHARACTER) this.getCharacters();
    if (this.value === this.LOCATION) this.getLocations();
    if (this.value === this.EPISODE) this.getEpisodes();
  }

  private getCharacters() {
    this.characterService
      .filterCharacters(
        FunctionsUtilitiesService.removeAttrEmpty(this.formSearch.value),
      )
      .subscribe(
        (resp: any) => {
          this.notFound = false;

          for (const result of resp.results) {
            result.compared = false;
            result.disabled = false;
            const url = this.getRandom(result.episode);
            this.episodeService
              .getSingleEpisode(+url.substring(url.lastIndexOf('/') + 1))
              .subscribe((episode: any) => {
                result.episode_detail = episode;
              });
          }
          this.data = resp;
          this.data.info.pages = resp.info.pages;
          this.data.info.count = resp.info.count;
          this.data.info.current_page = 1;
          this.loading = false;
        },
        () => (this.notFound = true),
      );
  }

  private getLocations() {
    this.locationService
      .filterLocations(
        FunctionsUtilitiesService.removeAttrEmpty(this.formSearch.value),
      )
      .subscribe(
        (resp: any) => {
          this.notFound = false;
          this.data = resp;
          this.data.info.pages = resp.info.pages;
          this.data.info.count = resp.info.count;
          this.data.info.current_page = 1;
          this.loading = false;
        },
        () => (this.notFound = true),
      );
  }

  private getEpisodes() {
    this.episodeService
      .filterEpisodes(
        FunctionsUtilitiesService.removeAttrEmpty(this.formSearch.value),
      )
      .subscribe(
        (resp: any) => {
          this.notFound = false;
          this.data = resp;
          this.data.info.pages = resp.info.pages;
          this.data.info.count = resp.info.count;
          this.data.info.current_page = 1;
          this.loading = false;
        },
        () => (this.notFound = true),
      );
  }

  private getRandom(episodes: Array<string>) {
    const random = Math.floor(Math.random() * episodes.length);
    return episodes[random];
  }

  private createForm() {
    this.formSearch = this.formBuilder.group({
      selector: [this.value, Validators.required],
      name: [''],
      status: [''],
      species: [''],
      type: [''],
      gender: [''],
      dimension: [''],
      episode: [''],
      page: [1],
    });
  }
  private scrollToTop() {
    window.scroll(0, 0);
  }
}
