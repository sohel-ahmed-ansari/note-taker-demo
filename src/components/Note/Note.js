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
            if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
                var range = document.createRange();
                range.selectNodeContents(el);
                range.collapse(false);
                var sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
            } else if (typeof document.body.createTextRange != "undefined") {
                var textRange = document.body.createTextRange();
                textRange.moveToElementText(el);
                textRange.collapse(false);
                textRange.select();
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