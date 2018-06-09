import React from 'react';
import './NotesContainer.css';
import Note from '../Note/Note';

function NotesContainer(props) {
    return (
        <div className="notes-container">
            {props.notes.map((note, index) => (
                <Note {...note} index={index}></Note>
            ))}
        </div>
    );
}

export default NotesContainer;