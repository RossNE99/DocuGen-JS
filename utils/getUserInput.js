import inquirer from "inquirer";
export const getUserInput = async (questions) => {
    const input = await inquirer.prompt(questions)
    return input
}

export async function getListInput(questionMessage, askAgainMessage, isNumberd=false) {
    const listInput = [];
    let index = 1
    let addAnother = true;

    while (addAnother) {
        const prefix = isNumberd ? `${index}.` : "-" 
        const { input } = await inquirer.prompt({
            message: questionMessage,
            name: "input",
            type: "input"
        });

        listInput.push(`${prefix} ${input}`);

        const { addMore } = await inquirer.prompt({
            message: askAgainMessage,
            name: "addMore",
            type: "confirm"
        });

        addAnother = addMore;
        index++
    }

    return listInput.join("\n");
}