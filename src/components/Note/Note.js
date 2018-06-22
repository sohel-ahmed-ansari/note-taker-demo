import React from 'react';
import './Note.css';

class Note extends React.Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = {
            isEditing: false
        };
    }

    onClick() {
        this.setState({
            isEditing: true
        });
    }

    render() {
        return (
            <div
                contentEditable={this.state.isEditing}
                spellCheck={this.state.isEditing}
                tabIndex={this.props.index}
                onClick={this.onClick}
                className="note"
            >
                {this.props.text}
            </div>
        );
    }
}

export default Note;