// import { useState } from "react";

import "./App.css";
import Team from "./Team";

function App() {
  return (
    <div id="site">
      <div id="inputs">
        <h3>Enter your league's teams here:</h3>
        <form></form>
      </div>
      <div id="outputs">
        <div id="field">
          <Team />
          <Team />
        </div>
        <div id="scoreboard"></div>
      </div>
    </div>
  );
}

export default App;
