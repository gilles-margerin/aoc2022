import axios, { AxiosError } from "axios";
import dotenv from "dotenv";
import { toGameValue } from "./toGameValue";
import { calculateScore } from "./calculateScore";
dotenv.config();

const url = "https://adventofcode.com/2022/day/2/input";

async function getInput(url: string): Promise<string | AxiosError> {
  try {
    const { data } = await axios.get(url, {
      headers: {
        Cookie: process.env.cookie,
      },
    });
    return JSON.stringify(data);
  } catch (err: unknown) {
    throw new AxiosError(JSON.stringify(err));
  }
}

const input = await getInput(url);
const data =
  typeof input === "string" &&
  input
    .replace(/"/g, "")
    .split(/\\n/g)
    .map((d: string) => toGameValue(d));
const result = data ? calculateScore(data) : "no data";
console.log(result);
