var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
};
function addVideoGame() {
    if (isAllDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
}
function isAllDataValid() {
    return true;
}
function displayGame(myGame) {
    var displayDiv = getById("display");
    var gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;
    var gameInfo = document.createElement("p");
    var notOnlineOnly = "";
    if (!myGame.isOnlineOnly) {
        notOnlineOnly = "not";
    }
    gameInfo.innerText = myGame.title + " has a rating of " + myGame.rating + ". It costs\n                         $" + myGame.price.toFixed(2) + ". It is " + notOnlineOnly + " online only";
    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameInfo);
}
function getVideoGame() {
    var game = new VideoGame();
    game.title = getById("title").value;
    game.price = parseFloat(getById("price").value);
    var ratingInput = getById("rating");
    game.rating = ratingInput.value;
    var digitalOnly = getById("online");
    if (digitalOnly.checked) {
        game.isOnlineOnly = true;
    }
    else {
        game.isOnlineOnly = false;
    }
    return game;
}
function getById(id) {
    return document.getElementById(id);
}
