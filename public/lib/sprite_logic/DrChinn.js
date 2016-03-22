"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// function DrChinn(game, spritesheet, playerNumber, assets, name) {
//   Character.call(this, game, spritesheet, playerNumber, assets, name);
//   this.loadAnims();
// }
//
// DrChinn.prototype = Object.create(Character.prototype); // See note below
//
// DrChinn.prototype.constructor = DrChinn;
//
// DrChinn.prototype.loadAnims = function () {
//
//   if (this.playerNumber === 1) {
//     this.animate = new Animate(this.spritesheet, 1850, 1000, 370, 500, 0.1, 3, true, true);
//     this.PunchAnimate = new Animate(this.spritesheet, 1500, 0, 370, 500, 0.05, 4, false, true);
//     this.KickAnimate = new Animate(this.spritesheet, 1500, 500, 370, 500, 0.1, 4, false, true);
//     this.WalkAnimate = new Animate(this.spritesheet, 1500, 2000, 370, 500, 0.1, 4, true, true);
//     this.BlockAnimate = new Animate(this.spritesheet, 1500, 2500, 370, 500, 0.1, 4, false, true);
//     this.HoldBlock = new Animate(this.spritesheet, 1500, 2500, 370, 500, 0.1, 1, true, true);
//     this.JumpAnimate = new Animate(this.spritesheet, 1500, 2000, 370, 500, .2, 4, false, true);
//     this.FallAnimate = new Animate(this.spritesheet, 1500, 2000, 370, 500, .2, 1, true, true);
//     this.CrouchAnimate = new Animate(this.spritesheet, 1500, 2500, 370, 500, .1, 4, false, true);
//     this.HoldCrouchAnimate = new Animate(this.spritesheet, 1500, 2500, 370, 500, .1, 1, true, true);
//     this.EmoteAnimate = new Animate(this.spritesheet, 1500, 2500, 370, 500, 0.1, 4, false, true);
//     this.gettingHitAnimate = new Animate(this.spritesheet, 2600, 0, 370, 500, 0.1, 1, false, true);
//   } else {
//     this.animate = new Animate(this.spritesheet, 0, 1000, 370, 500, 0.1, 3, true, false);
//     this.PunchAnimate = new Animate(this.spritesheet, 0, 0, 370, 500, 0.05, 4, false, false);
//     this.KickAnimate = new Animate(this.spritesheet, 0, 500, 370, 500, 0.1, 4, false, false);
//     this.WalkAnimate = new Animate(this.spritesheet, 0, 2000, 370, 500, 0.1, 4, true, false);
//     this.BlockAnimate = new Animate(this.spritesheet, 0, 2500, 370, 500, 0.1, 4, false, false);
//     this.HoldBlock = new Animate(this.spritesheet, 1110, 2500, 370, 500, 0.1, 1, true, false);
//     this.JumpAnimate = new Animate(this.spritesheet, 0, 2000, 370, 500, .2, 4, false, false);
//     this.FallAnimate = new Animate(this.spritesheet, 1110, 2000, 370, 500, .2, 1, true, false);
//     this.CrouchAnimate = new Animate(this.spritesheet, 0, 2500, 370, 500, .1, 4, false, false);
//     this.HoldCrouchAnimate = new Animate(this.spritesheet, 1110, 2500, 370, 500, .1, 1, true, false);
//     this.EmoteAnimate = new Animate(this.spritesheet, 0, 2500, 370, 500, 0.1, 4, false, false);
//     this.gettingHitAnimate = new Animate(this.spritesheet, 0, 0, 370, 500, 0.1, 1, false, false);
//   }
// };
//
// DrChinn.prototype.throwBook = function () {
//   var start_x;
//   if (this.playerNumber === 1) {
//     start_x = this.x + 300;
//   } else {
//     start_x = this.x - 40;
//   }
//   gameEngine.addBook(new Book(this.game, assets.getAsset("../assets/img/alg-book.png"), start_x, this.y + 100, this.playerNumber));
// };
//
// function Book(game, spritesheet, x, y, playerNumber) {
//   this.game = game;
//   this.ctx = game.ctx;
//   this.playerNumber = playerNumber;
//   this.x = x;
//   this.y = y;
//   this.spritesheet = spritesheet;
//   this.animate = new Animate(spritesheet, 0, 0, 400, 500, 0.1, 4, true, false);
//   this.removeFromWorld = false;
// }
// Book.prototype.draw = function () {
//   this.animate.drawBook(this.game.clockTick, this.ctx, this.x, this.y);
// };
// Book.prototype.update = function () {
//   if (this.isOffScreen()) {
//     this.removeFromWorld = true;
//   }
//   if (this.playerNumber === 1) {
//     this.x += 10;
//   } else {
//     this.x -= 10;
//   }
// };
// Book.prototype.isOffScreen = function () {
//   if (this.x >= this.game.surfaceWidth || this.x < 0)
//     return true;
//
// };
// Book.prototype.distance = function (a, b) {
//   var dx = a.x - b.x;
//   var dy = a.y - b.y;
//   return Math.sqrt(dx * dx + dy * dy);
// };
// Book.prototype.collide = function (other) {
//   return this.distance(this, other) < 370 / 4;
// };

var DrChinn = function (_Character) {
  _inherits(DrChinn, _Character);

  function DrChinn(game, spritesheet, playerNumber, assets, name) {
    _classCallCheck(this, DrChinn);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DrChinn).call(this, game, spritesheet, playerNumber, assets, name));

    _this.loadAnims();
    return _this;
  }

  _createClass(DrChinn, [{
    key: "loadAnims",
    value: function loadAnims() {
      if (this.playerNumber === 1) {
        this.animate = new Animate(this.spritesheet, 1850, 1000, 370, 500, 0.1, 3, true, true);
        this.PunchAnimate = new Animate(this.spritesheet, 1500, 0, 370, 500, 0.05, 4, false, true);
        this.KickAnimate = new Animate(this.spritesheet, 1500, 500, 370, 500, 0.1, 4, false, true);
        this.WalkAnimate = new Animate(this.spritesheet, 1500, 2000, 370, 500, 0.1, 4, true, true);
        this.BlockAnimate = new Animate(this.spritesheet, 1500, 2500, 370, 500, 0.1, 4, false, true);
        this.HoldBlock = new Animate(this.spritesheet, 1500, 2500, 370, 500, 0.1, 1, true, true);
        this.JumpAnimate = new Animate(this.spritesheet, 1500, 2000, 370, 500, .2, 4, false, true);
        this.FallAnimate = new Animate(this.spritesheet, 1500, 2000, 370, 500, .2, 1, true, true);
        this.CrouchAnimate = new Animate(this.spritesheet, 1500, 2500, 370, 500, .1, 4, false, true);
        this.HoldCrouchAnimate = new Animate(this.spritesheet, 1500, 2500, 370, 500, .1, 1, true, true);
        this.EmoteAnimate = new Animate(this.spritesheet, 1500, 2500, 370, 500, 0.1, 4, false, true);
        this.gettingHitAnimate = new Animate(this.spritesheet, 2600, 0, 370, 500, 0.1, 1, false, true);
      } else {
        this.animate = new Animate(this.spritesheet, 0, 1000, 370, 500, 0.1, 3, true, false);
        this.PunchAnimate = new Animate(this.spritesheet, 0, 0, 370, 500, 0.05, 4, false, false);
        this.KickAnimate = new Animate(this.spritesheet, 0, 500, 370, 500, 0.1, 4, false, false);
        this.WalkAnimate = new Animate(this.spritesheet, 0, 2000, 370, 500, 0.1, 4, true, false);
        this.BlockAnimate = new Animate(this.spritesheet, 0, 2500, 370, 500, 0.1, 4, false, false);
        this.HoldBlock = new Animate(this.spritesheet, 1110, 2500, 370, 500, 0.1, 1, true, false);
        this.JumpAnimate = new Animate(this.spritesheet, 0, 2000, 370, 500, .2, 4, false, false);
        this.FallAnimate = new Animate(this.spritesheet, 1110, 2000, 370, 500, .2, 1, true, false);
        this.CrouchAnimate = new Animate(this.spritesheet, 0, 2500, 370, 500, .1, 4, false, false);
        this.HoldCrouchAnimate = new Animate(this.spritesheet, 1110, 2500, 370, 500, .1, 1, true, false);
        this.EmoteAnimate = new Animate(this.spritesheet, 0, 2500, 370, 500, 0.1, 4, false, false);
        this.gettingHitAnimate = new Animate(this.spritesheet, 0, 0, 370, 500, 0.1, 1, false, false);
      }
    }
  }, {
    key: "throwBook",
    value: function throwBook() {
      var start_x;
      if (this.playerNumber === 1) {
        start_x = this.x + 300;
      } else {
        start_x = this.x - 40;
      }
      gameEngine.addBook(new Book(this.game, assets.getAsset("../assets/img/alg-book.png"), start_x, this.y + 100, this.playerNumber));
    }
  }]);

  return DrChinn;
}(Character);

var Book = function () {
  function Book(game, spritesheet, x, y, playerNumber) {
    _classCallCheck(this, Book);

    this.game = game;
    this.ctx = game.ctx;
    this.playerNumber = playerNumber;
    this.x = x;
    this.y = y;
    this.spritesheet = spritesheet;
    this.animate = new Animate(spritesheet, 0, 0, 400, 500, 0.1, 4, true, false);
    this.removeFromWorld = false;
  }

  _createClass(Book, [{
    key: "draw",
    value: function draw() {
      this.animate.drawBook(this.game.clockTick, this.ctx, this.x, this.y);
    }
  }, {
    key: "update",
    value: function update() {
      if (this.isOffScreen()) {
        this.removeFromWorld = true;
      }
      if (this.playerNumber === 1) {
        this.x += 10;
      } else {
        this.x -= 10;
      }
    }
  }, {
    key: "isOffScreen",
    value: function isOffScreen() {
      if (this.x >= this.game.surfaceWidth || this.x < 0) return true;
    }
  }, {
    key: "distance",
    value: function distance(a, b) {
      var dx = a.x - b.x;
      var dy = a.y - b.y;
      return Math.sqrt(dx * dx + dy * dy);
    }
  }, {
    key: "colide",
    value: function colide(other) {
      return this.distance(this, other) < 370 / 4;
    }
  }]);

  return Book;
}();