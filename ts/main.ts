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
function isAllDataValid() {
    return true;
}

function displayGame(myGame:VideoGame):void {
    // TODO: Display video game below the form
}

function getVideoGame():VideoGame {
    // TODO: Create game
    // use data from form
    // return game
}