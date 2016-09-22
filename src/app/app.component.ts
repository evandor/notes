import { Component } from '@angular/core';
import { Note } from './domain/notes'
import { EditorState } from './domain/editorstate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  localNotes = new Array<Note>();
  newNote = new Note();
  editorstate = EditorState.CLEAN;


  ngOnInit() {
    var localNotesAsString = localStorage.getItem('localNotes');
    if (localNotesAsString != null) {
      this.localNotes = JSON.parse(localNotesAsString);
    }
    console.log(this.localNotes);
  }

  onSubmit() {
    this.newNote.title = this.newNote.content;
    console.log(this.newNote);
    this.localNotes.push(this.newNote);
    localStorage.setItem('localNotes', JSON.stringify(this.localNotes));
    this.newNote = new Note();
    this.editorstate = EditorState.CLEAN;
  }

  addNote() {
    console.log("about to add note");
  }

  showNote(note: Note) {
    console.log("picked note " + note);
    this.newNote = note;
    this.editorstate = EditorState.CLEAN;
  }

  setDirty(dirty: boolean) {
    if (dirty) {
      this.editorstate = EditorState.DIRTY;
    } else {
      this.editorstate = EditorState.CLEAN;
    }
  }
}
