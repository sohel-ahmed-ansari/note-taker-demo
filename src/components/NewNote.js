import React from 'react';
import ContentEditable from 'react-contenteditable';
import '../styles/NewNote.css';
import { connect } from 'react-redux';
import {updateNewNote, addNote} from '../actions';

class NewNote extends React.Component {

    constructor(props) {
        super(props);
        this.updateNewNote = props.updateNewNote;
        this.addNote = props.addNote;
        this.onChange = this.onChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.clearNote = this.clearNote.bind(this);
        this.onAddClick = this.onAddClick.bind(this);
    }

    onChange(evt) {
        this.updateNewNote(evt.target.value);
    }

    onBlur() {
        const contentTrimmed = this.convertToText(this.props.content).trim();
        //if trimmed text is empty, clear content so that isEmpty is set true
        if (contentTrimmed === '') {
            this.clearNote();
        }
    }

    convertToText(content) {
        // Replace spaces.
        content = content.replace(/&nbsp;/gi, ' ');
        // Replace "<br>".
        content = content.replace(/<br>/gi, '\n');
        // Replace "<div>""
        content = content.replace(/<div>/gi, '\n');
        content = content.replace(/<\/div>/gi, '');
        // Replace "<p>"
        content = content.replace(/<p>/gi, '\n');
        content = content.replace(/<\/p>/gi, '');

        return content;
    }

    onAddClick() {
        this.addNote(this.props.content);
        this.clearNote();
    }

    clearNote() {
        this.updateNewNote('');
    }

    render() {
        return (
            <div className="new-note">
                <ContentEditable
                    html={this.props.content}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    spellCheck={true}
                    className="new-note-content"
                ></ContentEditable>
                { this.props.isEmpty ? <div className="note-placeholder">Take a note...</div> : null }
                <div className={this.props.isEmpty ? 'buttons disabled' : 'buttons'}>
                    <div className="button" onClick={this.clearNote}>CANCEL</div>
                    <div className="button" onClick={this.onAddClick}>ADD</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    content: state.newNote.content,
    isEmpty: state.newNote.isEmpty
});

const mapDispatchToProps = dispatch => ({
    updateNewNote: (content) => dispatch(updateNewNote(content)),
    addNote: (content) => dispatch(addNote(content))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewNote);