// # input-button.js
import React, { Component } from "react";
import { Button } from "antd";
import PropTypes from "prop-types";

class inButton extends Component {
  static propTypes = {
    className: PropTypes.string,
  };
  static defaultProps = {
    className: "same_size",
  };
  render() {
    return (
      <Button
        type="button"
        className={this.props.className}
        value={this.props.value}
      >
        {this.props.value}
      </Button>
    );
  }
}
export default inButton;