import React from 'react';
import './NotesContainer.css';
import Note from '../Note/Note';
import Sortable from 'sortablejs';

class NotesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.notesContainer = React.createRef();
        this.onSort = this.onSort.bind(this);
        this.sortNotes = props.sortNotes;
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
                    <Note {...note} key={note.id} dataId={note.id} updateNote={this.props.updateNote}></Note>
                ))}
            </div>
        );
    }
}

export default NotesContainer;