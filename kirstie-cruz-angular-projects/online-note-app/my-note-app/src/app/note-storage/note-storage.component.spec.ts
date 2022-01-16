import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteStorageComponent } from './note-storage.component';

describe('NoteStorageComponent', () => {
  let component: NoteStorageComponent;
  let fixture: ComponentFixture<NoteStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteStorageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
