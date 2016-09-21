import { Component } from '@angular/core';
import { Note } from './domain/notes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  localNotes = new Array<Note>();
  newNote = new Note();

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
    localStorage.setItem('localNotes',JSON.stringify(this.localNotes));
    this.newNote = new Note();
  }

  addNote() {
    console.log("about to add note");
  }
}
