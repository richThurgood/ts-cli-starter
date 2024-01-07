import { program } from "commander";
import inquirer from "inquirer";
import { processNumbers } from "./processNumbers";

// Define the CLI command and its argument
program
  .version("0.1.0")
  .argument("<file>", "Path to the text file containing numbers")
  .action((file) => {
    processFile(file);
  });

program.parse(process.argv);

function processFile(filePath: string) {
  inquirer
    .prompt([
      {
        type: "number",
        name: "numberToAdd",
        message: "Enter a number to add to each number in the file:",
        validate: (input: number) =>
          !isNaN(input) ? true : "Please enter a valid number.",
      },
    ])
    .then(async (answers) => {
      const updatedNumbers = await processNumbers(
        filePath,
        answers.numberToAdd
      );

      console.log("Updated numbers:", updatedNumbers);
    });
}
