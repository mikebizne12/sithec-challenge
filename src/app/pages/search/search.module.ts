import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './containers/search/search.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewCharacterComparativeComponent } from './components/view-character-comparative/view-character-comparative.component';
import { ViewCharacterComponent } from './components/view-character/view-character.component';
import { ViewEpisodeCharacterComponent } from './components/view-episode-character/view-episode-character.component';
import { ViewEpisodeComponent } from './components/view-episode/view-episode.component';
import { ViewLocationComponent } from './components/view-location/view-location.component';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputTextModule } from 'primeng/inputtext';
import { ChipModule } from 'primeng/chip';
import { NgxsModule } from '@ngxs/store';
import { CharacterState } from 'src/state/character.state';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { PaginatorModule } from 'primeng/paginator';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
  },
];

@NgModule({
  declarations: [
    SearchComponent,
    SearchFieldComponent,
    ViewCharacterComponent,
    ViewLocationComponent,
    ViewEpisodeComponent,
    ViewEpisodeCharacterComponent,
    ViewCharacterComparativeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    NgxsModule.forFeature([CharacterState]),
    LazyLoadImageModule,
    CardModule,
    ButtonModule,
    CheckboxModule,
    SelectButtonModule,
    InputTextModule,
    ChipModule,
    ProgressSpinnerModule,
    PaginatorModule,
    DynamicDialogModule,
    ToastModule,
  ],
})
export class SearchModule {}
