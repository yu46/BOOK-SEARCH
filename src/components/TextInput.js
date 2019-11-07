import React, { Component } from "react";
import { getBooksInfo } from "../actions";
import { connect } from "react-redux";

class TxetInput extends Component {
  state = {
    text: this.props.text || ""
  };

  handleSubmit = e => {
    const text = {
      title: e.target.value.trim(),
      author: "",
      isbn: "",
      count: 40
    };
    if (e.which === 13) {
      console.log(text);
      this.props.dispatch(getBooksInfo(text));
    }
  };
  render() {
    return <input type="text" onKeyDown={this.handleSubmit} />;
  }
}

export default connect()(TxetInput);
