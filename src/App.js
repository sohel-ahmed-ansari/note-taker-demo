import React, { Component } from 'react';
import './styles/App.css';
import NewNote from './components/NewNote'
import NotesContainer from './components/NotesContainer'
import uuid from 'uuid/v1'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        };
        this.updateNote = this.updateNote.bind(this);
        this.sortNotes = this.sortNotes.bind(this);
        this.addNote = this.addNote.bind(this);
        window.app = this;
    }

    sortNotes(sortIds) {
        const notes = this.state.notes.slice();
        notes.sort((a, b) => (sortIds.indexOf(a.id) - sortIds.indexOf(b.id)));
        this.setState({ notes });
    }

    updateNote(id, content) {
        const notes = this.state.notes.map((note) => {
            return (note.id === id) ? { content, id } : note;
        });
        this.setState({ notes });
    }

    addNote(content) {
        const notes = this.state.notes;
        notes.push({
            content,
            id: uuid()
        });
        this.setState({ notes });
    }

    render() {
        return (
            <div className="app">
                <div className="new-notes-container">
                    <NewNote addNoteHandler={this.addNote}>
                    </NewNote>
                </div>
                <NotesContainer
                    notes={this.state.notes} 
                    updateNoteHandler={this.updateNote}
                    sortNotesHandler={this.sortNotes}
                ></NotesContainer>
            </div>
        );
    }
}

export default App;
