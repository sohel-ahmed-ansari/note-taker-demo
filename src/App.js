import React from 'react';
import './styles/App.css';
import NewNote from './components/NewNote'
import NotesContainer from './components/NotesContainer'

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <div className="new-notes-container">
                    <NewNote></NewNote>
                </div>
                <NotesContainer></NotesContainer>
            </div>
        );
    }
}

export default App;
