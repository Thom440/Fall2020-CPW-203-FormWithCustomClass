class VideoGame {
    title:string;
    price:number;
    rating:string;
    isOnlineOnly:boolean;
    release:string;
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
    clearErrors();
    if (isAllDataValid()) {
        let game = getVideoGame();
        displayGame(game);
    }
}

// add validation code
function isAllDataValid():boolean {
    let isValid = true;
    if (!isValidTitle()) {
        isValid = false;
    }
    if (!isValidPrice()) {
        isValid = false;
    }
    if (!isValidRelease()) {
        isValid = false;
    }
    if (!isValidRating()) {
        isValid = false;
    }
    return isValid;
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

function isValidRelease():boolean {
    let release = <HTMLInputElement>getById("release-date");
    let gameRelease = release.value;

    if (!isValidDate(gameRelease)) {
        displayError("Date must be in the format MM/DD/YYYY");
        return false;
    }
    return true;
}

function isValidDate(input:string):boolean {
    let pattern = /^\d{2}\/\d{2}\/\d{4}$/g;
    return pattern.test(input);
}

function isValidRating():boolean {
    let ratingInput = <HTMLSelectElement>getById("rating");
    let rating = ratingInput.value;

    if (rating == "") {
        displayError("Must Select a Rating");
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
    gameHeading.innerText = myGame.title + " " + myGame.release;

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

    game.release = (<HTMLInputElement>getById("release-date")).value;
    
    return game;
}

function getById(id:string) {
    return document.getElementById(id);
}

function clearErrors():void {
    let errorDiv = getById("validation-summary");
    while (errorDiv.firstChild) {
        errorDiv.removeChild(errorDiv.firstChild);
    }
}