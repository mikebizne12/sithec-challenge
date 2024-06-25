import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { IList } from 'src/app/shared/interfaces/list';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
})
export class SearchFieldComponent {
  @Input() form!: UntypedFormGroup;
  @Input() filter = 1;
  @Output() eventClic: EventEmitter<any> = new EventEmitter();

  gender: Array<IList> = [
    { id: 'female', name: 'Female' },
    { id: 'male', name: 'Male' },
    { id: 'genderless', name: 'Genderless' },
    { id: 'unknown', name: 'Unknown' },
  ];

  status: Array<IList> = [
    { id: 'alive', name: 'Alive' },
    { id: 'dead ', name: 'Dead ' },
    { id: 'unknown', name: 'Unknown' },
  ];

  CHARACTER = 1;
  LOCATION = 2;
  EPISODE = 3;

  onSearch() {
    this.eventClic.emit();
  }

  resetForm() {
    this.form.reset();
    this.form.controls['page'].setValue(1);
    this.form.controls['selector'].setValue(1);
  }
}
