import React from "react";
import ReactDOM from "react-dom";

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
