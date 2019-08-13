import React from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

function App() {
  return (
    <div className="App section">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <button className="button is-success is-outlined">Oy</button>
      <div>
        <button className="button is-primary is-medium is-outlined">
          Deuse
        </button>
      </div>
      <span class="icon">
        <i class="fas fa-home" />
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
