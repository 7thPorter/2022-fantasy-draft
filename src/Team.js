import { useState } from "react";

import colorSelect from "./colorGenerator";

const Team = () => {
  const [redColor, setRedColor] = useState(0);
  const [blueColor, setBlueColor] = useState(0);
  const [greenColor, setGreenColor] = useState(0);

  const colorSelector = () => {
    setRedColor(colorSelect());
    setBlueColor(colorSelect());
    setGreenColor(colorSelect());
  };

  return (
    <div className="outer-wrapper">
      <div
        className="box"
        style={{
          backgroundColor: `rgb(${redColor}, ${blueColor}, ${greenColor})`,
        }}
      ></div>
      <button onClick={colorSelector}>This button changes colors</button>
    </div>
  );
};

export default Team;
