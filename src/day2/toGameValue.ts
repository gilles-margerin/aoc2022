export function toGameValue(dataChunk: string): string {
  let result: string = "";

  switch (dataChunk[0]) {
    case "A":
      result += "Rock ";
      break;
    case "B":
      result += "Paper ";
      break;
    case "C":
      result += "Scissors ";
      break;
    default:
      result = result;
  }

  switch (dataChunk[2]) {
    case "X":
      result += "Rock";
      break;
    case "Y":
      result += "Paper";
      break;
    case "Z":
      result += "Scissors";
      break;
    default:
      result = result;
  }

  return result;
}