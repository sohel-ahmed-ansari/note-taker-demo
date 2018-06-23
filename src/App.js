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
                dataId: uuid()
            }, {
                content: 'My second note',
                dataId: uuid()
            }, {
                content: 'My third note',
                dataId: uuid()
            }, {
                content: 'My fourth note',
                dataId: uuid()
            }, {
                content: 'My fifth note',
                dataId: uuid()
            }]
        };
        this.updateNote = this.updateNote.bind(this);
        window.appState = this.state;
    }

    updateNote(dataId, content) {
        const note = this.state.notes.find(((note) => note.dataId === dataId));
        note.content = content;
    }

    render() {
        return (
            <NotesContainer notes={this.state.notes} updateNote={this.updateNote}></NotesContainer>
        );
    }
}

export default App;
