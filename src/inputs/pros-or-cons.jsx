import React from "react";
import PropTypes from "prop-types";
import EmptyInput from "./items/empty-input";
import EditableInput from "./items/editable-input";

function EditableBlock(props) {
  const { name, isEditable, addNewInput, data } = props;

  const onAddNewInput = () => {
    addNewInput(name);
  };

  const getPropAndConstItems = () => {
    if (Array.isArray(data) && data.length) {
      data.map((item, i) => {
        if (i === isEditable) {
          return (
            <li key={i}>
              <EditableInput index={i} text={item} {...props} />
            </li>
          );
        }
        return (
          <li key={i}>
            <EmptyInput index={i} text={item} {...props} />
          </li>
        );
      });
    }
    return null;
  };

  return (
    <section className="list">
      <section className="title">{name}</section>
      <ol>
        {getPropAndConstItems()}
        <li>
          <input type="text" onFocus={onAddNewInput} />
        </li>
      </ol>
    </section>
  );
}

EditableBlock.propTypes = {
  name: PropTypes.string.isRequired,
  isEditable: PropTypes.string.isRequired,
  addNewInput: PropTypes.func.isRequired,
  data: PropTypes.array(PropTypes.shape({})).isRequired
};

export default EditableBlock;
