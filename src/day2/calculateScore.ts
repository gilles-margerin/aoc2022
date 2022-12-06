const scoreMap = {
  Rock: 1,
  Paper: 2,
  Scissors: 3,
};

type objKey = keyof typeof scoreMap;

export function calculateScore(rounds: string[]): number {
  let score: number = 0;

  for (const round of rounds) {
    const [advInput, myInput] = round.split(" ") as objKey[];
    if (!advInput || !myInput) {
      continue;
    }
    score += scoreMap[myInput];

    switch (advInput) {
      case "Paper":
        if (myInput === "Paper") {
          score += 3;
        } else if (myInput === "Rock") {
          score += 0;
        } else if (myInput === "Scissors") {
          score += 6;
        }
        break;
      case "Rock":
        if (myInput === "Paper") {
          score += 6;
        } else if (myInput === "Rock") {
          score += 3;
        } else if (myInput === "Scissors") {
          score += 0;
        }
        break;
      case "Scissors":
        if (myInput === "Paper") {
          score += 0;
        } else if (myInput === "Rock") {
          score += 6;
        } else if (myInput === "Scissors") {
          score += 3;
        }
        break;
      default:
        score = score;
    }
  }
  return score;
}