import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor() {
    super();
    this.state = { data: {}, e: {} };
  }

  async componentDidMount() {
    try {
      const response = await fetch(`https://api.icndb.com/jokes/random`);
      if (!response.ok) {
        throw Error(response.statusText);
      }

      const json = await response.json();
      this.setState(() => ({ data: json }));
    } catch (error) {
        console.log(error);
      this.setState(() => ({ ...this.state.data, e: error }));
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <div>{this.state.error.message}</div>}
        {this.state.data && this.state.data.value && (
          <p>{this.state.data.value.joke}</p>
        )}
      </div>
    );
  }
}

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
