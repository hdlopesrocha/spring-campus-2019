import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundTimbreComponent } from './sound-timbre.component';

describe('SoundTimbreComponent', () => {
  let component: SoundTimbreComponent;
  let fixture: ComponentFixture<SoundTimbreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundTimbreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundTimbreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
