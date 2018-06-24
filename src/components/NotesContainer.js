import React from 'react';
import '../styles/NotesContainer.css';
import Note from './Note';
import Sortable from 'sortablejs';

class NotesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.notesContainer = React.createRef();
        this.onSort = this.onSort.bind(this);
        this.sortNotes = props.sortNotesHandler;
    }

    componentDidMount() {
        this.sortable = Sortable.create(this.notesContainer.current, {
            animation: 250,
            onSort: this.onSort,
            draggable: '.note',
            ghostClass: 'is-dragging'
        });
    }

    onSort() {
        this.sortNotes(this.sortable.toArray());
    }

    render() {
        return (
            <div className="notes-container" ref={this.notesContainer}>
                {this.props.notes.map((note, index) => (
                    <Note {...note} key={note.id} dataId={note.id} updateNoteHandler={this.props.updateNoteHandler}></Note>
                ))}
            </div>
        );
    }
}

export default NotesContainer;