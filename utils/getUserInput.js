import inquirer from "inquirer";
export const getUserInput = async (questions) => {
    const input = await inquirer.prompt(questions)
    return input
}