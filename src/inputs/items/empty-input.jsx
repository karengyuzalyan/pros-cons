import React, { Component } from 'react';

class EmptyInput extends Component {
  render() {
    return (
      <section onClick={() => this.props.editInputs(this.props.name, this.props.index)}>
        {this.props.text}
      </section>
    );
  }
}

export default EmptyInput;
