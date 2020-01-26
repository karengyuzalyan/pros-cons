import React, { PureComponent } from 'react'
import EditableBlock from './inputs/pros-or-cons'

class ListWrapper extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      editableArrays: {
        pros: [
          'It is really testy1',
          'It is really testy2',
          'It is really testy3',
          'It is really testy4',
        ],
        cons: ['Make me fat', 'Too expensive'],
      },
      isEditable: {
        pros: NaN,
        cons: NaN,
        nan: 1,
      },
    }
  }

  addNewInput = type => {
    const editableArrays = { ...this.state.editableArrays }
    Object.keys(editableArrays).forEach((item, i) => {
      if (item === type) {
        Object.values(editableArrays)[i].push('')
        this.setState({ type, editableArrays })
        this.editInputs(type, Object.values(editableArrays)[i].length - 1)
      }
    })
  }

  editInputs = (type, index) => {
    const { isEditable } = this.state
    if (type === 'pros') {
      isEditable.pros = index
    } else {
      isEditable.cons = index
    }
    this.setState({ isEditable })
  }

  resetEdit = (type, index, value) => {
    const { isEditable } = this.state
    this.changeValue(type, index, value)
    isEditable.pros = NaN
    isEditable.cons = NaN
    this.setState({ isEditable })
  }

  changeValue = (type, index, value) => {
    const editableArrays = { ...this.state.editableArrays }

    if (value === '') {
      switch (type) {
        case 'pros':
          editableArrays.pros.splice(index, 1)
          break
        case 'cons':
          editableArrays.cons.splice(index, 1)
          break
        default:
          return false
      }
      this.setState({ editableArrays })
    } else {
      switch (type) {
        case 'pros':
          editableArrays.pros[index] = value
          this.setState({ editableArrays })
          break
        case 'cons':
          editableArrays.cons[index] = value
          this.setState({ editableArrays })
          break
        default:
          return false
      }
    }
    return null
  }

  render() {
    const { editableArrays, isEditable } = this.state

    return (
      <div className="list-wrapper">
        <header>Should I eat at McDonalds ?</header>
        <article className="lists">
          {Object.keys(editableArrays).map((item, i) => (
            <EditableBlock
              key={i}
              name={item}
              data={Object.values(editableArrays)[i]}
              editableArrays={editableArrays}
              isEditable={Object.values(isEditable)[i]}
              editInputs={this.editInputs}
              changeValue={this.changeValue}
              addNewInput={this.addNewInput}
              resetEdit={this.resetEdit}
            />
          ))}
        </article>
      </div>
    )
  }
}

export default ListWrapper
