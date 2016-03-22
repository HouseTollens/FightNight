"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

///**
// * Created by httpnick on 1/28/15.
// */
//function Chris(game, spritesheet, playerNumber, assets,name) {
//    Character.call(this, game, spritesheet, playerNumber, assets,name);
//    this.loadAnims();
//}
//
//Chris.prototype = Object.create(Character.prototype); // See note below
//
//Chris.prototype.constructor = Chris;
//
//Chris.prototype.loadAnims = function() {
//    if (this.playerNumber === 2) {
//        this.animate = new Animate(this.spritesheet, 3370, 1000, 370, 500, 0.1, 3, true, true);
//        this.WalkAnimate = new Animate(this.spritesheet, 0, 3000, 370, 500, 0.1, 4, true, true);
//        this.PunchAnimate = new Animate(this.spritesheet, 1855, 2002, 368, 460, 0.05, 3, false, true);
//        this.KickAnimate = new Animate(this.spritesheet, 1800, 2500, 370, 500, 0.1, 3, false, true);
//        this.JumpAnimate = new Animate(this.spritesheet, 1800, 1500, 370, 500, 0.2, 3, false, true);
//        this.FallAnimate = new Animate(this.spritesheet, 1800, 1500, 370, 500, 0.2, 1, true, false);
//        this.BlockAnimate = new Animate(this.spritesheet, 1800, 0, 370, 500, 0.1, 3, false, true);
//        this.HoldBlock = new Animate(this.spritesheet, 1800, 0, 370, 500, 0.1, 1, true, true);
//        this.CrouchAnimate = new Animate(this.spritesheet, 1800, 1000, 370, 500, .1, 3, false, true);
//        this.HoldCrouchAnimate = new Animate(this.spritesheet, 1800, 1000, 370, 500, .1, 1, true, true);
//        this.EmoteAnimate = new Animate(this.spritesheet, 0, 3500, 370, 435, 0.1, 4, false, true);
//        this.gettingHitAnimate = new Animate(this.spritesheet, 1900, 500, 370, 500, 0.05, 3, false, true);
//    } else {
//        this.animate = new Animate(this.spritesheet, 3370, 0, 370, 500, 0.1, 3, true, false);
//        this.WalkAnimate = new Animate(this.spritesheet, 3000, 2000, 370, 500, 0.1, 4, true, false);
//        this.PunchAnimate = new Animate(this.spritesheet, 20, 2002, 370, 500, 0.05, 3, false, false);
//        this.KickAnimate = new Animate(this.spritesheet, 20, 2500, 370, 500, 0.1, 3, false, false);
//        this.JumpAnimate = new Animate(this.spritesheet, 0, 1500, 370, 500, 0.2, 3, false, false);
//        this.FallAnimate = new Animate(this.spritesheet, 740, 1500, 370, 500, 0.2, 1, true, false);
//        this.BlockAnimate = new Animate(this.spritesheet, 0, 0, 370, 500, 0.1, 3, false, false);
//        this.HoldBlock = new Animate(this.spritesheet, 740, 0, 370, 500, 0.1, 1, true, false);
//        this.CrouchAnimate = new Animate(this.spritesheet, 0, 1000, 370, 500, .1, 3, false, false);
//        this.HoldCrouchAnimate = new Animate(this.spritesheet, 740, 1000, 370, 500, .1, 1, true, false);
//        this.EmoteAnimate = new Animate(this.spritesheet, 3000, 2500, 370, 437, 0.1, 4, false, false);
//        this.gettingHitAnimate = new Animate(this.spritesheet, 0, 500, 370, 500, 0.05, 3, false, false);
//    }
//};

var Chris = function (_Character) {
  _inherits(Chris, _Character);

  function Chris(game, spritesheet, playerNumber, assets, name) {
    _classCallCheck(this, Chris);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Chris).call(this, game, spritesheet, playerNumber, assets, name));

    _this.loadAnims();
    return _this;
  }

  _createClass(Chris, [{
    key: "loadAnims",
    value: function loadAnims() {
      if (this.playerNumber === 2) {
        this.animate = new Animate(this.spritesheet, 3370, 1000, 370, 500, 0.1, 3, true, true);
        this.WalkAnimate = new Animate(this.spritesheet, 0, 3000, 370, 500, 0.1, 4, true, true);
        this.PunchAnimate = new Animate(this.spritesheet, 1855, 2002, 368, 460, 0.05, 3, false, true);
        this.KickAnimate = new Animate(this.spritesheet, 1800, 2500, 370, 500, 0.1, 3, false, true);
        this.JumpAnimate = new Animate(this.spritesheet, 1800, 1500, 370, 500, 0.2, 3, false, true);
        this.FallAnimate = new Animate(this.spritesheet, 1800, 1500, 370, 500, 0.2, 1, true, false);
        this.BlockAnimate = new Animate(this.spritesheet, 1800, 0, 370, 500, 0.1, 3, false, true);
        this.HoldBlock = new Animate(this.spritesheet, 1800, 0, 370, 500, 0.1, 1, true, true);
        this.CrouchAnimate = new Animate(this.spritesheet, 1800, 1000, 370, 500, .1, 3, false, true);
        this.HoldCrouchAnimate = new Animate(this.spritesheet, 1800, 1000, 370, 500, .1, 1, true, true);
        this.EmoteAnimate = new Animate(this.spritesheet, 0, 3500, 370, 435, 0.1, 4, false, true);
        this.gettingHitAnimate = new Animate(this.spritesheet, 1900, 500, 370, 500, 0.05, 3, false, true);
      } else {
        this.animate = new Animate(this.spritesheet, 3370, 0, 370, 500, 0.1, 3, true, false);
        this.WalkAnimate = new Animate(this.spritesheet, 3000, 2000, 370, 500, 0.1, 4, true, false);
        this.PunchAnimate = new Animate(this.spritesheet, 20, 2002, 370, 500, 0.05, 3, false, false);
        this.KickAnimate = new Animate(this.spritesheet, 20, 2500, 370, 500, 0.1, 3, false, false);
        this.JumpAnimate = new Animate(this.spritesheet, 0, 1500, 370, 500, 0.2, 3, false, false);
        this.FallAnimate = new Animate(this.spritesheet, 740, 1500, 370, 500, 0.2, 1, true, false);
        this.BlockAnimate = new Animate(this.spritesheet, 0, 0, 370, 500, 0.1, 3, false, false);
        this.HoldBlock = new Animate(this.spritesheet, 740, 0, 370, 500, 0.1, 1, true, false);
        this.CrouchAnimate = new Animate(this.spritesheet, 0, 1000, 370, 500, .1, 3, false, false);
        this.HoldCrouchAnimate = new Animate(this.spritesheet, 740, 1000, 370, 500, .1, 1, true, false);
        this.EmoteAnimate = new Animate(this.spritesheet, 3000, 2500, 370, 437, 0.1, 4, false, false);
        this.gettingHitAnimate = new Animate(this.spritesheet, 0, 500, 370, 500, 0.05, 3, false, false);
      }
    }
  }]);

  return Chris;
}(Character);