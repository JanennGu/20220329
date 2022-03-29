// # input-text.js

import React, { Component } from "react";
import { Input } from "antd";

const { TextArea } = Input;

class inText extends Component {
  render() {
    return (
      <TextArea
        type="text"
        id="content"
        autoSize={false}
        value={this.props.value}
        readOnly={true}
      />
    );
  }
}
export default inText;