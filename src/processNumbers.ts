import * as fs from "fs";
import * as path from "path";

export const processNumbers = async (filePath: string, numberToAdd: number) => {
  const fullPath = path.resolve(filePath);

  try {
    const data = await fs.promises.readFile(fullPath, "utf8");
    const numbers = data
      .split("\n")
      .map((line) => parseFloat(line.trim()))
      .filter((n) => !isNaN(n));
    const updatedNumbers = numbers.map((n) => n + numberToAdd);
    return updatedNumbers;
  } catch (err) {
    console.error(`Error reading file: ${err}`);
  }
};
