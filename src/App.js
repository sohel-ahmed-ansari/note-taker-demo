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
  }
  
  render() {
    return (
      <NotesContainer notes={this.state.notes}></NotesContainer>
    );
  }
}

export default App;
