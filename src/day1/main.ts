import axios, { AxiosError } from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const url = 'https://adventofcode.com/2022/day/1/input'

async function getInput(url: string): Promise<string| AxiosError>  {
  try {
    const { data } = await axios.get(url, {
      headers: {
        Cookie: process.env.cookie
      }
    })
    return JSON.stringify(data)
  } catch (err: unknown) {
    throw  new AxiosError(JSON.stringify(err))
  }
}

const input = await getInput(url)

function findMostCalories(input: string): number {
  const chunks = input.split(/\n/)
  let sum: number = 0
  const result = Math.max(...chunks.reduce((acc: number[], current: string) => {
    if (current) {
      sum += Number(current)
    } else if (!current) {
      acc.push(sum)
      sum = 0
    }
    return acc
  }, []))
  return result
}

const result = findMostCalories(input as string)
console.log(result)