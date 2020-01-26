import React from 'react'
import PropTypes from 'prop-types'

function EmptyInput(props) {
  const onEditInputs = () => {
    props.editInputs(props.name, props.index)
  }

  return <section onClick={onEditInputs}>{props.text}</section>
}

EmptyInput.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  editInputs: PropTypes.func.isRequired,
}

export default EmptyInput
