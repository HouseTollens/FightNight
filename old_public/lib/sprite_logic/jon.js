"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Jon = function (_Character) {
  _inherits(Jon, _Character);

  function Jon(game, spritesheet, playerNumber, assets, name) {
    _classCallCheck(this, Jon);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Jon).call(this, game, spritesheet, playerNumber, assets, name));

    _this.loadAnims();
    return _this;
  }

  _createClass(Jon, [{
    key: "loadAnims",
    value: function loadAnims() {
      if (this.playerNumber === 1) {
        this.animate = new Animate(this.spritesheet, 3000, 2000, 370, 500, 0.1, 2, true, false);
        this.PunchAnimate = new Animate(this.spritesheet, 0, 1995, 370, 480, 0.05, 4, false, false);
        this.KickAnimate = new Animate(this.spritesheet, 0, 2480, 370, 500, 0.1, 4, false, false);
        this.WalkAnimate = new Animate(this.spritesheet, 3000, 0, 370, 500, 0.1, 4, true, false);
        this.BlockAnimate = new Animate(this.spritesheet, 0, 10, 370, 500, 0.1, 3, false, false);
        this.HoldBlock = new Animate(this.spritesheet, 740, 10, 370, 500, 0.1, 1, true, false);
        this.JumpAnimate = new Animate(this.spritesheet, 0, 1485, 370, 490, .2, 3, false, false);
        this.FallAnimate = new Animate(this.spritesheet, 0, 1485, 370, 490, .2, 1, true, false);
        this.EmoteAnimate = new Animate(this.spritesheet, 3000, 500, 370, 500, 0.1, 4, false, false);
        this.CrouchAnimate = new Animate(this.spritesheet, 0, 1000, 370, 485, 0.1, 3, false, false);
        this.HoldCrouchAnimate = new Animate(this.spritesheet, 740, 1000, 370, 485, 0.1, 1, true, false);
        this.gettingHitAnimate = new Animate(this.spritesheet, 0, 500, 370, 500, 0.05, 3, false, false);
      } else {
        this.animate = new Animate(this.spritesheet, 740, 2980, 370, 500, 0.1, 2, true, true);
        this.PunchAnimate = new Animate(this.spritesheet, 1500, 1995, 370, 480, 0.05, 4, false, true);
        this.KickAnimate = new Animate(this.spritesheet, 1520, 2480, 370, 500, 0.1, 4, false, true);
        this.WalkAnimate = new Animate(this.spritesheet, 3000, 1000, 370, 500, 0.1, 4, true, true);
        this.BlockAnimate = new Animate(this.spritesheet, 1800, 10, 370, 500, 0.1, 3, false, true);
        this.HoldBlock = new Animate(this.spritesheet, 2540, 10, 370, 500, 0.1, 1, true, true);
        this.JumpAnimate = new Animate(this.spritesheet, 1800, 1485, 370, 490, .2, 3, false, true);
        this.FallAnimate = new Animate(this.spritesheet, 2540, 1485, 370, 490, .2, 1, true, true);
        this.EmoteAnimate = new Animate(this.spritesheet, 3000, 1485, 370, 490, 0.1, 4, false, true);
        this.CrouchAnimate = new Animate(this.spritesheet, 1800, 1000, 370, 485, 0.1, 3, false, true);
        this.HoldCrouchAnimate = new Animate(this.spritesheet, 1800, 1000, 370, 485, 0.1, 1, true, true);
        this.gettingHitAnimate = new Animate(this.spritesheet, 1800, 500, 370, 500, 0.05, 3, false, true);
      }
    }
  }]);

  return Jon;
}(Character);