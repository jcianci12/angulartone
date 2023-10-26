import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.css']
})
export class PianoComponent implements OnInit {
  _selectedNotes = [""]
  @Input() selectedNote =[""]
  @Output() noteSelected = new EventEmitter<string[]>();
  notes = this.generatePianoKeys();

  constructor() { }

  ngOnInit(): void {
  }
  selectNote(note: string) {
    const index = this.selectedNote.indexOf(note);
    if (index === -1) {
      // The note is not in the array, so add it
      this.selectedNote.push(note);
    } else {
      // The note is in the array, so remove it
      this.selectedNote.splice(index, 1);
    }
    this.noteSelected.emit(this.selectedNote);

  }
  

  generatePianoKeys() {
    const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    let pianoKeys = [];

    for (let i = 0; i < 8; i++) {
      for (let note of notes) {
        pianoKeys.push(note + i);
      }
    }

    // Add the last C note
    pianoKeys.push('C8');

    return pianoKeys;
  }
}
