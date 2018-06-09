import React from 'react';
import './Note.css';

class Note extends React.Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = {
            isEditing: 'false'
        };
    }

    onClick() {
        this.setState({
            isEditing: 'true'
        });
    }

    render() {
        return (
            <div
                contenteditable={this.state.isEditing}
                spellcheck={this.state.isEditing}
                tabindex={this.props.index}
                onClick={this.onClick}
                className="note"
            >
                {this.props.text}
            </div>
        );
    }
}

export default Note;