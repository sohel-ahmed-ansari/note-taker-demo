import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NotesContainer from './components/NotesContainer/NotesContainer'
import uuid from 'uuid/v1'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [{
                content: 'My first note',
                id: uuid()
            }, {
                content: 'My second note',
                id: uuid()
            }, {
                content: 'My third note',
                id: uuid()
            }, {
                content: 'My fourth note',
                id: uuid()
            }, {
                content: 'My fifth note',
                id: uuid()
            }]
        };
        this.updateNote = this.updateNote.bind(this);
        this.sortNotes = this.sortNotes.bind(this);
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

    render() {
        return (
            <NotesContainer 
                notes={this.state.notes} 
                updateNote={this.updateNote}
                sortNotes={this.sortNotes}
            ></NotesContainer>
        );
    }
}

export default App;
