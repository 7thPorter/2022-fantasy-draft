const nflMath = () => {
  let runPass = Math.floor(Math.random() * 100);
  let completionPct = Math.floor(Math.random() * 100);
  let tfl = Math.floor(Math.random() * 100);
  let fumblePct = Math.floor(Math.random() * 100);
  let playType = "";
  let yardsGained = 0;

  if (fumblePct <= 6) {
    return (yardsGained -= Math.floor(Math.random() * 10) + 10);
  }

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

  if (playType === "run" && tfl <= 20) {
    return (yardsGained -= Math.floor(Math.random() * 5) + 1);
  } else if (playType === "run" && tfl > 20) {
    return (yardsGained += Math.floor(Math.random() * 5) + 3);
  }
};

export default nflMath;
