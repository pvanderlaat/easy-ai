export class History{

    // Constructor for recording the prompt and Image
    constructor(prompt, Images){
        this.prompt = prompt;
        this.Image = [Images[2], Images[1], Images[0]];

    }
}

const history = [];

//function to save the prompt and Image for history
export function saveInput(prompt, Images){
    
    //create a history entry
    const entry = new History(prompt, Images);

    //add the entry to the history
    history.push(entry)
    
    console.log(history)
}

//function to get the history
export function getHistory(){
    return history;
}

