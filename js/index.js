var Game = require("./game.js");

var game = new Game();
game.showCoin();
game.showFurry();
game.startGame();

document.addEventListener("keydown", function (event) {
    self.turnFurry(event);
});