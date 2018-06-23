import React from 'react';
import './Note.css';
import ContentEditable from 'react-contenteditable'

class Note extends React.Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            isEditing: false,
            content: props.content
        };
        this.noteRef = React.createRef();
        this.updateNote = props.updateNote;
    }

    onClick() {
        if (this.state.isEditing) {
            return;
        }
        this.setState({
            isEditing: true
        });
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
        this.setState({
            isEditing: false
        });
    }

    onChange(evt) {
        this.setState({
            content: evt.target.value
        });
        this.updateNote(this.props.dataId, this.state.content);
    }

    render() {
        return (
            <ContentEditable
                ref={this.noteRef}
                html={this.state.content}
                disabled={!this.state.isEditing}
                onChange={this.onChange}
                spellCheck={this.state.isEditing}
                onClick={this.onClick}
                onBlur={this.onBlur}
                className="note"
                data-id={this.props.dataId}
            ></ContentEditable>
        );
    }
}

export default Note;