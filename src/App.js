import { useState } from "react";

import "./App.css";
import colorSelect from "./colorGenerator";

function App() {
  const [userInput, setUserInput] = useState("");
  const [teamList, setTeamList] = useState([]);
  // const [winnersCircle, setWinnersCircle] = useState([]);

  const handleInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTeamList([
      ...teamList,
      {
        name: userInput,
        color: `rgb(${colorSelect()}, ${colorSelect()}, ${colorSelect()})`,
      },
    ]);
    setUserInput("");
  };

  const handleReset = () => {
    setTeamList([]);
    setUserInput("");
  };

  return (
    <div id="site">
      <div id="inputs">
        <h3>Enter your league's teams here:</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Team Name:
            <input type="text" value={userInput} onChange={handleInput} />
          </label>
          <input type="submit" value="Add Team" />
        </form>
        <button onClick={handleReset}>Reset League</button>
      </div>
      <div id="outputs">
        <div id="field">
          <div id="football-field">
            <div className="startzone">
              {teamList.length
                ? teamList.map((team, index) => {
                    return (
                      <p style={{ color: team.color }} key={index}>
                        {team.name}
                      </p>
                    );
                  })
                : "No teams have been added to the league yet. Add teams above!"}
            </div>
            <div className="main-field"></div>
            <div className="endzone">
              <h1>TOUCHDOWN</h1>
            </div>
          </div>
          <div id="runner">Test Runner</div>
        </div>
        <div id="scoreboard"></div>
      </div>
    </div>
  );
}

export default App;
