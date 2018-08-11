import React from 'react';
import '../styles/Note.css';
import ContentEditable from 'react-contenteditable';

class Note extends React.Component {

    constructor(props) {
        super(props);
        this.updateNote = props.updateNote;
        this.setEditMode = props.setEditMode;
        this.onClick = this.onClick.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onChange = this.onChange.bind(this);
        this.noteRef = React.createRef();
    }

    onClick() {
        if (this.props.isEditing) {
            return;
        }
        this.setEditMode(this.props.id, true);
        setTimeout(() => {
            const el = this.noteRef.current.htmlEl;
            el.focus();
            let range;
            if (typeof window.getSelection !== "undefined" && typeof document.createRange !== "undefined") {
                range = document.createRange();
                range.selectNodeContents(el);
                range.collapse(false);
                const sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
            } else if (typeof document.body.createTextRange !== "undefined") {
                range = document.body.createTextRange();
                range.moveToElementText(el);
                range.collapse(false);
                range.select();
            }
        }, 0);
    }

    onBlur() {
        this.setEditMode(this.props.id, false);
    }

    onChange(evt) {
        this.updateNote(this.props.id, evt.target.value);
    }

    render() {
        return (
            <ContentEditable
                ref={this.noteRef}
                html={this.props.content}
                disabled={!this.props.isEditing}
                onChange={this.onChange}
                spellCheck={this.props.isEditing}
                onClick={this.onClick}
                onBlur={this.onBlur}
                className="note"
                data-id={this.props.id}
            ></ContentEditable>
        );
    }
}

export default Note;