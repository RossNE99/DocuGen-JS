//imports
import inquirer from "inquirer";

export const getUserInput = async (questions) => { //function that takes an array of questions and returns the users input for eatch question
    const input = await inquirer.prompt(questions)
    return input
}

export async function getListInput(questionMessage, askAgainMessage, isNumberd=false) { // creating a function that takes in questionMessage, askAgainMessage and isNumberd
    const listInput = []; //initiallise array for the answers                           //This function will keep asking if the user wants to add more items to the list until the users says no
    let index = 1   //start visal index off at 1 
    let addAnother = true; //initiallise addAnother as true

    while (addAnother) {    //do this while addAnother is true (this means the user wants to add another list item)
        const prefix = isNumberd ? `${index}.` : "-"   //if isNumberd is true then display the index no with a . for example "2.", if its faulse then just do a unordered list using "-"
        const { input } = await inquirer.prompt({ //destructure input whitch will be the users list item
            message: questionMessage,
            name: "input",
            type: "input"
        });

        listInput.push(`${prefix} ${input}`); //add the users list item to the listInput array in the correct format with the prefix

        const { addMore } = await inquirer.prompt({ // ask the user if they want to add another list item
            message: askAgainMessage,
            name: "addMore",
            type: "confirm"
        });

        addAnother = addMore; //update addAnother to the users responce from above (line 24) if true then the loop will run again if false then loop will end
        index++ //add a number onto the current index
    }

    return listInput.join("\n"); //return the listInput separated by a new line for each item
}