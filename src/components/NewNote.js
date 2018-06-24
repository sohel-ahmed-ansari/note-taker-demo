import React from 'react';
import ContentEditable from 'react-contenteditable'
import '../styles/NewNote.css'

class Note extends React.Component {

    constructor(props) {
        super(props);
        this.addNote = props.addNoteHandler;
        this.onChange = this.onChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.clearNote = this.clearNote.bind(this);
        this.onAddClick = this.onAddClick.bind(this);
        this.state = {
            content: '',
            isEmpty: true
        };
    }

    onChange(evt) {
        const content = evt.target.value;
        const isEmpty = content === '';
        this.setState({
            content,
            isEmpty
        });
    }

    onBlur() {
        const contentTrimmed = this.convertToText(this.state.content).trim();
        const isEmpty = contentTrimmed === '';
        //if trimmed text is empty, clear content and set isEmpty
        if (isEmpty) {
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
        this.addNote(this.state.content);
        this.clearNote();
    }

    clearNote() {
        this.setState({
            content: '', 
            isEmpty: true
        });
    }

    render() {
        return (
            <div className="new-note">
                <ContentEditable
                    html={this.state.content}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    spellCheck={true}
                    className="new-note-content"
                ></ContentEditable>
                { this.state.isEmpty ? <div className="note-placeholder">Take a note...</div> : null }
                <div className={this.state.isEmpty ? 'buttons disabled' : 'buttons'}>
                    <div className="button" onClick={this.clearNote}>CANCEL</div>
                    <div className="button" onClick={this.onAddClick}>ADD</div>
                </div>
            </div>
        );
    }
}

export default Note;