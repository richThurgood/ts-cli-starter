import { processNumbers } from "./processNumbers"; // Import your core logic function
import * as fs from "fs";

jest.mock("fs", () => {
  return {
    promises: {
      readFile: jest.fn(),
    },
  };
});
jest.mock("inquirer");

describe("processNumbers", () => {
  it("should add a number to each number in the file", async () => {
    (fs.promises.readFile as jest.Mock).mockImplementation(async () =>
      Promise.resolve("1\n2\n3")
    );

    const result = await processNumbers("dummyPath", 2);
    expect(result).toEqual([3, 4, 5]);
  });
});
