import { useState, useEffect, useRef } from "react";

import "./App.css";
import colorSelect from "./colorGenerator";

function App() {
  const fieldNumbers = [
    5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5,
  ];
  const [userInput, setUserInput] = useState("");
  const [teamList, setTeamList] = useState([]);
  const [gameMode, setGameMode] = useState("initial");
  const [selectionFinished, setSelectionFinished] = useState(false);

  const selectionRef = useRef(null);
  const winnersRef = useRef([]);

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
        points: 0,
      },
    ]);
    setUserInput("");
  };

  const handleReset = () => {
    setTeamList([]);
    setUserInput("");
    setGameMode("initial");
    winnersRef.current = [];
  };

  const toggleMode = () => {
    if (gameMode === "initial") {
      setGameMode("selection");
      winnersRef.current = [];
    } else {
      setGameMode("initial");
    }
  };

  if (
    teamList.length === winnersRef.current.length &&
    gameMode === "selection"
  ) {
    setSelectionFinished(true);
    toggleMode();
    teamList.map((team) => {
      team.points = 0;
      return { name: team.name, color: team.color, points: team.points };
    });
  }

  useEffect(() => {
    if (
      gameMode === "selection" &&
      winnersRef.current.length !== teamList.length
    ) {
      selectionRef.current = setInterval(() => {
        setTeamList((teamList) => {
          return teamList.map((team) => {
            if (team.points <= 100) {
              team.points += Math.floor(Math.random() * 10);
            }

            if (team.points >= 100 && !winnersRef.current.includes(team.name)) {
              winnersRef.current.push(team.name);
            }

            return { name: team.name, color: team.color, points: team.points };
          });
        });
      }, 2000);
    } else {
      clearInterval(selectionRef.current);
    }
    //eslint-disable-next-line
  }, [gameMode]);

  return (
    <div id="site">
      <div id="modal" style={selectionFinished ? null : { display: "none" }}>
        <div className="final-results">
          <h1>Final Order for the 2022 Fantasy Football Draft!</h1>
          <ol className="winners-circle">
            {winnersRef.current.length ? (
              winnersRef.current.map((winner) => {
                return <li>{winner}</li>;
              })
            ) : (
              <div></div>
            )}
          </ol>
          <button
            onClick={() => {
              setSelectionFinished(false);
            }}
          >
            Select Again
          </button>
        </div>
      </div>
      <div id="inputs">
        <h3>Enter your league's teams here:</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Team Name:
            <input
              className="input-field"
              type="text"
              value={userInput}
              onChange={handleInput}
            />
          </label>
          <input type="submit" value="Add Team" />
        </form>
        <div className="buttons">
          <button onClick={toggleMode} style={{ backgroundColor: "green" }}>
            {gameMode === "initial" ? "Begin Selection!" : "Pause Selection"}
          </button>
          <button
            onClick={handleReset}
            style={{ backgroundColor: "red" }}
            disabled={gameMode === "initial" ? false : true}
          >
            Reset League
          </button>
        </div>
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
            <div className="main-field">
              {fieldNumbers.map((number) => {
                return <span>{number}</span>;
              })}
              <div className="points-display">
                {teamList.map((team) => {
                  return (
                    <div
                      className="team-points"
                      style={{
                        backgroundColor: team.color,
                        width: `${team.points}%`,
                      }}
                    ></div>
                  );
                })}
              </div>
            </div>
            <div className="endzone">
              <h1>TOUCHDOWN</h1>
            </div>
          </div>
        </div>
        <div id="scoreboard">
          <h1>Draft Order:</h1>
          <ol className="winners-circle">
            {winnersRef.current.length ? (
              winnersRef.current.map((winner) => {
                return <li>{winner}</li>;
              })
            ) : (
              <div></div>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
