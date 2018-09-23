/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/coin.js":
/*!********************!*\
  !*** ./js/coin.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

var Coin = function() {
    this.x = Math.floor(Math.random() * 10);
    this.y = Math.floor(Math.random() * 10);
};

module.exports = Coin;

/***/ }),

/***/ "./js/furry.js":
/*!*********************!*\
  !*** ./js/furry.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

var Furry = function() {
    this.x = 0;
    this.y = 0;
    this.direction = "right";
};

module.exports = Furry;

/***/ }),

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Coin = __webpack_require__(/*! ./coin.js */ "./js/coin.js");
var Furry = __webpack_require__(/*! ./furry.js */ "./js/furry.js");

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

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Game = __webpack_require__(/*! ./game.js */ "./js/game.js");

var game = new Game();
game.showCoin();
game.showFurry();
game.startGame();

document.addEventListener("keydown", function (event) {
    self.turnFurry(event);
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map