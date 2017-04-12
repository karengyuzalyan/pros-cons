import React, { Component } from 'react';

class EditableInput extends Component {

  render() {
    return(
      <input
        type="text"
        value={this.props.text}
        onChange={e => this.props.changeValue(this.props.name, this.props.index, e.target.value)}
        autoFocus
        onBlur={e => this.props.resetEdit(this.props.name, this.props.index, e.target.value)}
      />
    );
  }
}
export default EditableInput;
