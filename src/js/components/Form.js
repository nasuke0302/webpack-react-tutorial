import React, { Component } from "react";
import ReactDOM from "react-dom";

/* class Form extends Component {
  constructor() {
    super();

    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState((oldState) => {
      return { ...oldState, value };
    });
  }

  render() {
    return (
      <>
        value: {this.state.value}
        <form>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
      </>
    );
  }
}
 */
const Form = () => {
  const [state, setState] = React.useState({ value: "" });

  return (
    <>
      value: {state.value}
      <form>
        <input
          type="text"
          value={state.value}
          onChange={(e) => setState({ value: e.target.value })}
        />
      </form>
    </>
  );
};

export default Form;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;
