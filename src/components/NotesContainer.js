import React from 'react';
import '../styles/NotesContainer.css';
import Note from './Note';
import Sortable from 'sortablejs';
import {sortNotes, updateNote, setEditMode} from '../actions';
import { connect } from 'react-redux';

class NotesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.sortNotes = props.sortNotes;
        this.updateNote = props.updateNote;
        this.setEditMode = props.setEditMode;
        this.notesContainer = React.createRef();
        this.onSort = this.onSort.bind(this);
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
                    <Note 
                        {...note}
                        key={note.id}
                        updateNote={this.updateNote}
                        setEditMode={this.setEditMode}>
                    </Note>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    notes: state.notes
});

const mapDispatchToProps = dispatch => ({
    sortNotes: (sortIds) => dispatch(sortNotes(sortIds)),
    updateNote: (id, content) => dispatch(updateNote(id, content)),
    setEditMode: (id, isEditing) => dispatch(setEditMode(id, isEditing))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NotesContainer);