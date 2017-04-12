import React, { Component } from 'react';
import EmptyInput from './items/empty-input';
import EditableInput from './items/editable-input';

class EditableBlock extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, isEditable, editableArrays } = this.props;
    return (
      <section className="list">
        <section className="title">{name}</section>
        <ol>
          {this.props.data.map((item, i) => {
            if (i === isEditable) {
              return (
                <li key={i}>
                  <EditableInput index={i} text={item} {...this.props} />
                </li>
              );
            }
            return (
              <li key={i}>
                <EmptyInput index={i} text={item} {...this.props} />
              </li>
            );
          })}
          <li><input type="text" onFocus={() => this.props.addNewInput(name)} /></li>
        </ol>
      </section>
    );
  }
}


export default EditableBlock;
