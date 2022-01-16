import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteArchiveComponent } from './note-archive.component';

describe('NoteArchiveComponent', () => {
  let component: NoteArchiveComponent;
  let fixture: ComponentFixture<NoteArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteArchiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
