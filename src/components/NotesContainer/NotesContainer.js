import React from 'react';
import './NotesContainer.css';
import Note from '../Note/Note';
import Sortable from 'sortablejs';

class NotesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.notesContainer = React.createRef();
        this.onSort = this.onSort.bind(this);
    }

    componentDidMount() {
        Sortable.create(this.notesContainer.current, {
            animation: 150,
            onSort: this.onSort,
            draggable: '.note',
            ghostClass: 'is-dragging'
        });
    }

    onSort(event) {
        console.log(event)
    }

    render() {
        return (
            <div className="notes-container" ref={this.notesContainer}>
                {this.props.notes.map((note, index) => (
                    <Note {...note} key={note.dataId} dataId={note.dataId} updateNote={this.props.updateNote}></Note>
                ))}
            </div>
        );
    }
}

export default NotesContainer;