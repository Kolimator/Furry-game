var Coin = require("./coin.js");
var Furry = require("./furry.js");

var Game = function () {
    self = this;
    this.board = document.querySelector("#board").querySelectorAll("div");
    this.furry = new Furry();
    this.coin = new Coin();
    this.score = 0;
    this.timeInterval = 250;
    this.gameEnd = false;

    this.index = function (x, y) {
        return x + (y * 10);
    };

    this.showFurry = function () {
        this.board[this.index(this.furry.x, this.furry.y)].classList.add("furry");
    };

    this.hideVisibleFurry = function () {
        document.querySelector(".furry").classList.remove("furry");
    };

    this.showCoin = function () {
        this.board[this.index(this.coin.x, this.coin.y)].classList.add("coin");
    };

    this.moveFurry = function () {

        if (this.furry.direction === "right") {
            this.furry.x++;
        } else if (this.furry.direction === "left") {
            this.furry.x--;
        } else if (this.furry.direction === "down") {
            this.furry.y++;
        } else if (this.furry.direction === "up"){
            this.furry.y--;
        }
        this.gameOver();
        if (this.gameEnd === false) {
            this.hideVisibleFurry();
            this.checkCoinCollision();
            this.showFurry();
        }
    };

    this.turnFurry = function (event) {
        switch (event.which) {
            case 37:
                this.furry.direction = "left";
                break;
            case 38:
                this.furry.direction = "up";
                break;
            case 39:
                this.furry.direction = "right";
                break;
            case 40:
                this.furry.direction = "down";
                break;
        }
    };

    this.checkCoinCollision = function () {

        if ((this.furry.x === this.coin.x) && (this.furry.y === this.coin.y)) {
            document.querySelector(".coin").classList.remove("coin");
            this.score++;
            document.querySelector("#score strong").innerHTML = this.score;
            this.coin = new Coin();
            this.showCoin();

            clearInterval(this.idInterval);
            self.timeInterval -=5;
            this.startGame();
        }
    };

    this.gameOver = function () {
        if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {
            clearInterval(this.idInterval);
            this.gameEnd = true;

            document.querySelector("#score").classList.add("invisible");
            document.querySelector("#board").classList.add("invisible")
            document.querySelector("#over").classList.remove("invisible");

            var pre = document.createElement("div");
            var button = document.createElement("button")
            var  over= document.querySelector("#over")
            var reload= function myFunction(){
                location.reload()
            }
            over.appendChild(pre);

            pre.innerHTML = "Game Over!" +
                "" + "\n" + "Uzyskano: " + this.score + " pkt";
            over.appendChild(button);
            button.innerHTML = "Again?"
            document.querySelector("#over > button").addEventListener("click",reload)




        }
    };

    this.startGame = function () {
        this.idInterval = setInterval(function () {
            self.moveFurry();
        }, self.timeInterval);
    };
};

module.exports = Game;