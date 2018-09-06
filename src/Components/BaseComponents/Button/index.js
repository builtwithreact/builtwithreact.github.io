import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    return (
      <button type={this.props.type}
        className={this.props.className.trim()}
        onClick={this.props.handleOnClick}> 
        {this.props.value}
      </button>
    )
  }
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  handleOnClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  type: 'button',
  className: ""
}
export default Button;
