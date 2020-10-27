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
    clearErrors();
    if (isAllDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
}
function isAllDataValid() {
    var isValid = true;
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
    var title = getById("title");
    var gameTitle = title.value;
    if (gameTitle.trim() == "") {
        displayError("Must Enter a Title");
        return false;
    }
    return true;
}
function isValidPrice() {
    var price = getById("price");
    var gamePrice = parseFloat(price.value);
    if (isNaN(gamePrice)) {
        displayError("Price Must Be a Number");
        return false;
    }
    return true;
}
function isValidRelease() {
    var release = getById("release-date");
    var gameRelease = release.value;
    if (!isValidDate(gameRelease)) {
        displayError("Date must be in the format MM/DD/YYYY");
        return false;
    }
    return true;
}
function isValidDate(input) {
    var pattern = /^\d{2}\/\d{2}\/\d{4}$/g;
    return pattern.test(input);
}
function isValidRating() {
    var ratingInput = getById("rating");
    var rating = ratingInput.value;
    if (rating == "") {
        displayError("Must Select a Rating");
        return false;
    }
    return true;
}
function displayError(message) {
    var errorDiv = getById("validation-summary");
    var errorMessage = document.createElement("p");
    errorMessage.innerText = message;
    errorDiv.appendChild(errorMessage);
}
function displayGame(myGame) {
    var displayDiv = getById("display");
    var gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title + " " + myGame.release;
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
    game.release = getById("release-date").value;
    return game;
}
function getById(id) {
    return document.getElementById(id);
}
function clearErrors() {
    var errorDiv = getById("validation-summary");
    while (errorDiv.firstChild) {
        errorDiv.removeChild(errorDiv.firstChild);
    }
}
