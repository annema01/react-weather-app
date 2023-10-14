export default function CurrentMoonPhase(props) {
  let moonPhase = props.moonPhase;
  console.log(moonPhase);
  switch (true) {
    case moonPhase > 0 && moonPhase <= 0.12:
      moonPhase = "moon_new";
      break;
    case moonPhase > 0.12 && moonPhase <= 0.25:
      moonPhase = "moon_waxingCrescent";
      break;
    case moonPhase > 0.25 && moonPhase <= 0.25:
      moonPhase = "moon_firstQuarter";
      break;
    case moonPhase > 0.25 && moonPhase <= 0.37:
      moonPhase = "moon_waxingGibous";
      break;
    case moonPhase > 0.37 && moonPhase <= 0.5:
      moonPhase = "moon_full";
      break;
    case moonPhase > 0.5 && moonPhase <= 0.62:
      moonPhase = "moon_waningGibous";
      break;
    case moonPhase > 0.62 && moonPhase <= 0.75:
      moonPhase = "moon_lastQuarter";
      break;
    case moonPhase > 0.75 && moonPhase <= 0.87:
      moonPhase = "moon_waningCrescent";
      break;
    case moonPhase > 0.87 && moonPhase <= 1:
      moonPhase = "moon_new";
      break;
    default:
      moonPhase = "moon_full";
      break;
  }
  console.log(`${moonPhase}`);

  return `${moonPhase}`;
}
