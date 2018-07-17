import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Explore extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setInputValue(nextProps.value)
    }
  }

  getInputValue = () => {
    return this.input.value
  }

  setInputValue = (val) => {
    this.input.value = val
  }

  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      console.log("hello");
      this.handleGoClick()
    }
  }

  handleGoClick = () => {
    this.props.onChange(this.getInputValue())
  }

  render() {
    return (
      <div>
        <input size="45"
               ref={(input) => this.input = input}
               defaultValue={this.props.value}
               onKeyUp={this.handleKeyUp} />
        <button onClick={this.handleGoClick}>
          Go!
        </button>
        <p>
          Move the DevTools with Ctrl+W or hide them with Ctrl+H.
        </p>
      </div>
    )
  }
}
