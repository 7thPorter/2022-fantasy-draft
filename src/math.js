const nflMath = () => {
  let runPass = Math.floor(Math.random() * 100);
  let completionPct = Math.floor(Math.random() * 100);
  let playType = "";
  let yardsGained = 0;

  if (runPass <= 55) {
    playType = "pass";
  } else {
    playType = "run";
  }

  if (playType === "pass" && completionPct >= 35) {
    return (yardsGained += Math.floor(Math.random() * 12) + 3);
  } else if (playType === "pass" && completionPct < 35) {
    return yardsGained;
  }

  // if (playType === "run")
};

export default nflMath;
