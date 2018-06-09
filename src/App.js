import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NotesContainer from './components/NotesContainer/NotesContainer'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: [{
        text: 'My first note'
      }, {
        text: 'My second note'
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
