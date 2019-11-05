import React, { Component } from "react";
import { getBooksInfo } from "../actions";
import { connect } from "react-redux";

class TxetInput extends Component {
  state = {
    text: this.props.text || ""
  };
  // const { getBooksInfo } = this.props

  handleSubmit = e => {
    const text = {
      title: e.target.value.trim(),
      author: "",
      isbn: "",
      count: 40
    };
    if (e.which === 13) {
      console.log(text);
      // this.props.dispatch(getBooksInfo(text));
      this.props.dispatch(getBooksInfo(text));
    }

    // this.setState({ text: e.target.value });
  };
  render() {
    return <input type="text" onKeyDown={this.handleSubmit} />;
  }
}

export default connect()(TxetInput);
// export default connect(
//   null,
//   { getBooksInfo }
// )(TxetInput);
