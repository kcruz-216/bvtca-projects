import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoteCreateComponent } from './note-create/note-create.component';
import { NoteStorageComponent } from './note-storage/note-storage.component';
import { NoteArchiveComponent } from './note-storage/note-archive/note-archive.component';
import { HeaderComponent } from './header/header.component';
import { NoteTrashComponent } from './note-storage/note-trash/note-trash.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteCreateComponent,
    NoteStorageComponent,
    NoteArchiveComponent,
    HeaderComponent,
    NoteTrashComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
