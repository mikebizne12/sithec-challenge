import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCharacterComponent } from '../../../../src/app/pages/search/components/view-character/view-character.component';
import { CharacterService } from '../../../../src/app/core/services/character.service';
import { MessageService } from 'primeng/api';

describe('ViewCharacterComponent', () => {
  let component: ViewCharacterComponent;
  let fixture: ComponentFixture<ViewCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [ViewCharacterComponent],
      providers: [CharacterService, MessageService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
