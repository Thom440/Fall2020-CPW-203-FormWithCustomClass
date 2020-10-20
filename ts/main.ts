class VideoGame {
    title:string;
    price:number;
    rating:string;
    isOnlineOnly:boolean;
}

// test code
// let myGame = new VideoGame();
// myGame.title = "Mario";
// myGame.rating = "E";
// myGame.isOnlineOnly = true;

window.onload = function() {
    let addBtn = <HTMLElement>document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
}

function addVideoGame() {
    if (isAllDataValid()) {
        let game = getVideoGame();
        displayGame(game);
    }
}

// add validation code
function isAllDataValid():boolean {
    if (!isValidTitle()) {
        return false;
    }
    if (!isValidPrice()) {
        return false;
    }
    if(!isValidRating()) {
        return false;
    }
    return true;
}

function isValidTitle() {
    let title = <HTMLInputElement>getById("title");
    let gameTitle = title.value;

    if (gameTitle.trim() == "") {
        displayError("Must Enter a Title");
        return false;
    }
    return true;
}

function isValidPrice():boolean {
    let price = <HTMLInputElement>getById("price");
    let gamePrice = parseFloat(price.value);

    if (isNaN(gamePrice)) {
        displayError("Price Must Be a Number");
        return false;
    }
    return true;
}

function isValidRating():boolean {
    let ratingInput = <HTMLSelectElement>getById("rating");
    let rating = ratingInput.value;

    if (rating == "Choose a rating") {
        displayError("Must Select an Rating");
        return false;
    }
    return true;
}

function displayError(message:string):void {
    let errorDiv = getById("validation-summary");

    let errorMessage = document.createElement("p");
    errorMessage.innerText = message;
    errorDiv.appendChild(errorMessage);
}

function displayGame(myGame:VideoGame):void {
    let displayDiv = getById("display");

    // Create <h2> with game title
    let gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;

    // Create paragraph with game details
    let gameInfo = document.createElement("p");
    let notOnlineOnly = "";
    if (!myGame.isOnlineOnly) {
        notOnlineOnly = "not";
    }
    // gameInfo.innerText = myGame.title + " has a rating of " + myGame.rating + ". It costs " + 
    //                     myGame.price + ". It is " + notOnlineOnly + " online only";
    
    gameInfo.innerText = `${myGame.title} has a rating of ${myGame.rating}. It costs
                         $${myGame.price.toFixed(2)}. It is ${notOnlineOnly} online only`;

    // add <h2> in the div id=display
    displayDiv.appendChild(gameHeading);
    // add paragraph
    displayDiv.appendChild(gameInfo);
}

/**
 * Gets all game data from the form and returns it in a VideoGame object
 */
function getVideoGame():VideoGame {
    let game = new VideoGame();
    game.title = (<HTMLInputElement>getById("title")).value;

    game.price = parseFloat((<HTMLInputElement>getById("price")).value);

    let ratingInput = <HTMLSelectElement>getById("rating");
    game.rating = ratingInput.value;

    let digitalOnly = <HTMLInputElement>getById("online");
    if (digitalOnly.checked) {
        game.isOnlineOnly = true;
    }
    else {
        game.isOnlineOnly = false;
    }
    
    return game;
}

function getById(id:string) {
    return document.getElementById(id);
}