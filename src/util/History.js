class History{

    // Constructor for recording the prompt and Image
    constructor(prompt, Image){

        this.prompt = prompt;
        this.Image = Image;

    }
}

const history = [];

//function to save the prompt and Image for history
function saveInput(prompt, Image){
    
    //create a history entry
    const entry = new History(prompt, Image);

    //add the entry to the history
    history.append(entry);
    
}

//function to get the history
function getHistory(){
    return history;
}

