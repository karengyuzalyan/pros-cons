import React from "react";
import PropTypes from "prop-types";

function EditableInput(props) {
  const onInputBlur = e => {
    props.resetEdit(props.name, props.index, e.target.value);
  };

  const onChangeInputValue = e => {
    props.changeValue(props.name, props.index, e.target.value);
  };
  return (
    <input
      autoFocus
      type="text"
      value={props.text}
      onBlur={onInputBlur}
      onChange={onChangeInputValue}
    />
  );
}

EditableInput.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired
};

export default EditableInput;
