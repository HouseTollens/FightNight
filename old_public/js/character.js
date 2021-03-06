class Character {
  constructor(game, spritesheet, playerNumber, assets, name) {
    this.spritesheet = spritesheet;
    this.animate = null;
    this.imgettinghit = false;
    this.PunchAnimate = null;
    this.KickAnimate = null;
    this.WalkAnimate = null;
    this.BlockAnimate = null;
    this.HoldBlock = null;
    this.JumpAnimate = null;
    this.FallAnimate = null;
    this.opponent = null;
    this.EmoteAnimate = null;
    this.CrouchAnimate = null;
    this.HoldCrouchAnimate = null;
    this.gettingHitAnimate = null;
    this.score = 0;
    this.game = game;
    this.name = name;
    this.ctx = game.ctx;
    this.assets = assets;
    this.health = 100;
    this.playerNumber = playerNumber;
    this.hitCounter = 0;
    if (this.playerNumber === 1) {
      this.x = 0;
    } else {
      this.x = 1900;
    }

    this.y = this.game.floorY;
    this.isPunching = false;
    this.isKicking = false;
    this.walkingRight = false;
    this.walkingLeft = false;
    this.isBlocking = false;
    this.isHoldingBlock = false;
    this.isJumping = false;
    this.isThrowing = false;
    this.isFalling = false;
    this.isEmoting = false;
    this.isCrouching = false;
    this.isHoldingCrouch = false;
    this.canvas = document.getElementById('gameCanvas');
    this.canvasWidth = this.canvas.width;
    this.HealthBar = null;
    if (this.playerNumber === 1) {
      this.HealthBar = new HealthBar(this.game, 100, 0, this.health, 75, 500, this.name, this.assets, this);
    } else {
      this.HealthBar = new HealthBar(this.game, 1599, 0, this.health, 75, 500, this.name, this.assets, this);
    }

    this.delta = null;
    this.diff = null;
    this.damage = null;

    this.finishhim = false;


    //Sound Objects
    this.playPunchSound = false;
    this.playKickSound = false;
    this.playGetPunchedSound = false;
    this.playGetKickedSound = false;
    this.playJumpSound = false;
    this.playVictorySound = false;
    this.playHealthSound = true;
  }

  setOpponent(opponent) {
    this.opponent = opponent;
    this.delta = 370 / 2;

    if (this.opponent.name === "DrChinn" || this.opponent.name === "DrTolentino")
      this.damage = 1;
    else if (this.opponent.name === "Jon")
      this.damage = .8;
    else
      this.damage = .6;
  }

  draw() {
    this.HealthBar.draw();
    if (this.imgettinghit) {
      this.gettingHitAnimate.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
      if (this.gettingHitAnimate.isDone()) {
        this.gettingHitAnimate.elapsedTime = 0;
        this.imgettinghit = false;
        this.score--;
        this.opponent.score++;
      }
    } else if (this.isJumping) {
      this.JumpAnimate.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    } else if (this.isFalling) {
      this.FallAnimate.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    } else if (this.isCrouching) {
      this.CrouchAnimate.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
      this.hitCounter = 0;
      if (this.CrouchAnimate.isDone()) {
        this.isCrouching = false;
      }
    } else if (this.isHoldingCrouch) {
      this.HoldCrouchAnimate.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
      this.hitCounter = 0;
    } else if (this.isEmoting) {
      this.EmoteAnimate.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
      this.playVictory();
      this.score++;

      if (this.EmoteAnimate.isDone()) {
        this.EmoteAnimate.elapsedTime = 0;
        this.isEmoting = false;
        this.hitCounter++;
      }
    } else if (this.isPunching) {
      this.PunchAnimate.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
      if (this.playPunchSound === false) {
        this.playPunch();
        this.playPunchSound = true;
      }
      // checks to see if the punch loop is over, if so set punching to be false.
      if (this.PunchAnimate.isDone()) {
        // this.health -= 5;
        this.HealthBar.setHealth(this.health);
        this.PunchAnimate.elapsedTime = 0;
        this.isPunching = false;
        this.playPunchSound = false;
      }
    } else if (this.isKicking) {
      this.KickAnimate.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
      if (this.playKickSound === false) {
        this.playKick();
        this.playKickSound = true;
      }
      // checks to see if the kick loop is over, if so set kicking to be false.
      if (this.KickAnimate.isDone()) {
        if (this.isThrowing) {
          this.throwBook();
          this.isThrowing = false;
        } else {
          // this.health -= 5;
          this.HealthBar.setHealth(this.health);
        }
        this.KickAnimate.elapsedTime = 0;
        this.isKicking = false;
        this.playKickSound = false;
      }
    } else if (this.isBlocking) {
      this.BlockAnimate.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
      this.hitCounter = 0;
      if (this.BlockAnimate.isDone()) {
        this.isBlocking = false;
      }
    } else if (this.isHoldingBlock) {
      this.HoldBlock.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
      this.hitCounter = 0;
    } else if (this.walkingRight || this.walkingLeft) {
      // walk animation (to the right)
      this.WalkAnimate.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    } else {
      // default standing animation
      this.animate.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    }
  }

  update() {
    if (this.health <= 0) {

      if (this.opponent.health >= 80 && this.opponent.health < 100) {
        var snd = this.assets.getAsset("../assets/sound/dom.mp3");
        snd.play();
        this.opponent.health = 79;
      }
      if (this.opponent.health === 100) {
        var snd = this.assets.getAsset("../assets/sound/godlike.mp3");
        snd.play();
        this.opponent.health = 101;
      }

      this.game.endGame(this.opponent.name);
    }
    if (this.hitCounter === 10) {
      var snd = this.assets.getAsset("../assets/sound/hs.mp3");
      snd.play();
    }
    if (this.hitCounter >= 16) {

      if (this.playHealthSound) {
        var hb = this.assets.getAsset("../assets/sound/hb.mp3");
        hb.play();
        this.playHealthSound = false;
        this.score = this.score + 50;
      }
      if (this.health < 100) {
        this.health += .05;
        this.HealthBar.setHealth(this.health);
      }
    }
    if (!this.finishhim && this.health < 15) {
      var finishHimSound = this.assets.getAsset("../assets/sound/victory/FinishHim.mp3");
      finishHimSound.play();
      this.finishhim = true;
      this.opponent.score = this.opponent.score + 10;
    }
    //Inserted just so I can try pushing again
    if (!this.imgettinghit) {
      if (this.playerNumber === 1) {
        this.updatePlayerOne();
      } else {
        this.updatePlayerTwo();
      }

      if (this.isJumping) {
        this.y -= 20;
        if (this.playJumpSound === false) {
          this.playJump();
          this.playJumpSound = true;
        }
        if (this.JumpAnimate.isDone()) {
          this.JumpAnimate.elapsedTime = 0;
          this.isJumping = false;
          this.isFalling = true;
          this.playJumpSound = false;
        }
      }
      if (this.isFalling) {
        if (this.y >= this.game.floorY) {
          this.isFalling = false;
        } else {
          this.y += 20;
        }
      }
    }
  }

  updatePlayerOne() {
    if (this.game.w && !this.isJumping && !this.isFalling) {
      this.isJumping = true;
    } else if (this.game.s) {
      if (!this.isHoldingCrouch) {
        this.isCrouching = true;
      }
      if (this.CrouchAnimate.isDone() && this.game.s) {
        this.isHoldingCrouch = true;
        this.CrouchAnimate.elapsedTime = 0;
        this.isCrouching = false;
      }
    } else if (this.game.f) {
      this.isPunching = true;

      this.opponent.checkHit();
    } else if (this.game.g) {
      if (this.name === "DrChinn") {
        this.isThrowing = true;
      }
      this.isKicking = true;

      this.opponent.checkHit();
    } else if (this.game.q) {
      if (!this.isHoldingBlock) {
        this.isBlocking = true;
      }
      if (this.BlockAnimate.isDone() && this.game.q) {
        this.isHoldingBlock = true;
        this.BlockAnimate.elapsedTime = 0;
        this.isBlocking = false;
      }
    } else if (this.game.e) {
      this.isEmoting = true;
    } else if (this.game.d) {
      if (this.x < this.canvasWidth - 370 && !this.collide(this.opponent)) {//keeps jon from walking off the right of the screen. Could someone add a correct width statement of Nick?
        this.walkingRight = true;
        this.x += 15;
      }
    } else if (this.game.a) {
      if (this.x > 0) {//keeps jon from walking out the left of the screen
        this.walkingLeft = true;
        this.x += -15;
      }
    } else if (!this.game.d || !this.game.a) {
      this.walkingRight = false;
      this.walkingLeft = false;
    }
    if (!this.game.q && this.isHoldingBlock) {
      this.isHoldingBlock = false;
    }

    if (!this.game.s && this.isHoldingCrouch) {
      this.isHoldingCrouch = false;
    }
  }

  updatePlayerTwo() {
    if (this.game.up && !this.isJumping && !this.isFalling) {
      this.isJumping = true;
    } else if (this.game.down) {
      if (!this.isHoldingCrouch) {
        this.isCrouching = true;
      }
      if (this.CrouchAnimate.isDone() && this.game.down) {
        this.isHoldingCrouch = true;
        this.CrouchAnimate.elapsedTime = 0;
        this.isCrouching = false;
      }
    } else if (this.game.comma) {
      if (!this.isHoldingBlock) {
        this.isBlocking = true;
      }
      if (this.BlockAnimate.isDone() && this.game.comma) {
        this.isHoldingBlock = true;
        this.BlockAnimate.elapsedTime = 0;
        this.isBlocking = false;
      }
    } else if (this.game.period) {
      this.isPunching = true;
      this.opponent.checkHit();

    } else if (this.game.fSlash) {
      if (this.name === "DrChinn") {
        this.isThrowing = true;
      }
      this.isKicking = true;

      this.opponent.checkHit();
    } else if (this.game.rShift) {
      this.isEmoting = true;
    } else if (this.game.right) {
      if (this.x < this.canvasWidth - 370) {
        this.walkingRight = true;
        this.x += 15;
      }
    } else if (this.game.left) {
      if (this.x > 0 && !this.collide(this.opponent)) {
        this.walkingLeft = true;
        this.x += -15;
      }
    } else if (!this.game.left || !this.game.right) {
      this.walkingRight = false;
      this.walkingLeft = false;
    }

    if (!this.game.comma && this.isHoldingBlock) {
      this.isHoldingBlock = false;
    }
    if (!this.game.down && this.isHoldingCrouch) {
      this.isHoldingCrouch = false;
    }
  }

  playPunch() {
    if (this.name === "Jon") {
      var snd = this.assets.getAsset("../assets/sound/JonSound/JonPunch.mp3");
      snd.play();
    } else if (this.name === "Nick") {
      var snd = this.assets.getAsset("../assets/sound/NickSound/NickPunch.mp3");
      snd.play();
    } else if (this.name === "Chris") {
      var snd = this.assets.getAsset("../assets/sound/ChrisSound/ChrisPunch.mp3");
      snd.play();
    } else if (this.name === "Matt") {
      var snd = this.assets.getAsset("../assets/sound/MattSound/MattPunch.mp3");
      snd.play();
    } else if (this.name === "DrChinn") {
      var snd = this.assets.getAsset("../assets/sound/kungfu2.mp3");
      snd.play();
    } else if (this.name === "DrTolentino") {
      var snd = this.assets.getAsset("../assets/sound/punch.mp3");
      snd.play();
    }
  }

  playVictory() {
    if (this.name === "Jon") {
      var snd = this.assets.getAsset("../assets/sound/JonSound/JonVictory.mp3");
      snd.play();
    } else if (this.name === "Nick") {
      var snd = this.assets.getAsset("../assets/sound/NickSound/NickVictory.mp3");
      snd.play();
    } else if (this.name === "Chris") {
      var snd = this.assets.getAsset("../assets/sound/ChrisSound/ChrisVictory.mp3");
      snd.play();
    } else if (this.name === "Matt") {
      var snd = this.assets.getAsset("../assets/sound/MattSound/MattVictory.mp3");
      snd.play();
    } else if (this.name === "DrChinn") {
      var snd = this.assets.getAsset("../assets/sound/chocking.mp3");
      snd.play();
    } else if (this.name === "DrTolentino") {
      var snd = this.assets.getAsset("../assets/sound/chocking.mp3");
      snd.play();
    }
  }

  playJump() {
    if (this.name === "Jon") {
      var snd = this.assets.getAsset("../assets/sound/JonSound/JonJumping.mp3");
      snd.play();
    } else if (this.name === "Nick") {
      var snd = this.assets.getAsset("../assets/sound/NickSound/NickJumping.mp3");
      snd.play();
    } else if (this.name === "Chris") {
      var snd = this.assets.getAsset("../assets/sound/ChrisSound/ChrisJumping.mp3");
      snd.play();
    } else if (this.name === "Matt") {
      var snd = this.assets.getAsset("../assets/sound/MattSound/MattJumping.mp3");
      snd.play();
    } else if (this.name === "DrChinn") {
      var snd = this.assets.getAsset("../assets/sound/kungfu2.mp3");
      snd.play();
    } else if (this.name === "DrTolentino") {
      var snd = this.assets.getAsset("../assets/sound/kungfu2.mp3");
      snd.play();
    }
  }

  playKick() {
    if (this.name === "Jon") {
      var snd = this.assets.getAsset("../assets/sound/JonSound/JonKick.mp3");
      snd.play();
    } else if (this.name === "Nick") {
      var snd = this.assets.getAsset("../assets/sound/NickSound/NickKick.mp3");
      snd.play();
    } else if (this.name === "Chris") {
      var snd = this.assets.getAsset("../assets/sound/ChrisSound/ChrisKick.mp3");
      snd.play();
    } else if (this.name === "Matt") {
      var snd = this.assets.getAsset("../assets/sound/MattSound/MattKick.mp3");
      snd.play();
    } else if (this.name === "DrChinn") {
      var snd = this.assets.getAsset("../assets/sound/kick.mp3");
      snd.play();
    } else if (this.name === "DrTolentino") {
      var snd = this.assets.getAsset("../assets/sound/kick.mp3");
      snd.play();
    }
  }

  playGettingPunched() {

    if (this.name === "Jon") {
      var snd = this.assets.getAsset("../assets/sound/kungfu.mp3");
      snd.play();
      var snd2 = this.assets.getAsset("../assets/sound/JonSound/JonGettingPunched.mp3");
      snd2.play();
    } else if (this.name === "Nick") {
      var snd = this.assets.getAsset("../assets/sound/kungfu.mp3");
      snd.play();
      var snd2 = this.assets.getAsset("../assets/sound/NickSound/NickGettingPunched.mp3");
      snd2.play();
    } else if (this.name === "Chris") {
      var snd = this.assets.getAsset("../assets/sound/kungfu.mp3");
      snd.play();
      var snd2 = this.assets.getAsset("../assets/sound/ChrisSound/ChrisGettingPunched.mp3");
      snd2.play();
    } else if (this.name === "Matt") {
      var snd = this.assets.getAsset("../assets/sound/kungfu.mp3");
      snd.play();
      var snd2 = this.assets.getAsset("../assets/sound/MattSound/MattGettingPunched.mp3");
      snd2.play();
    } else if (this.name === "DrChinn") {
      var snd = this.assets.getAsset("../assets/sound/kungfu.mp3");
      snd.play();
      var snd2 = this.assets.getAsset("../assets/sound/chocking.mp3");
      snd2.play();
    } else if (this.name === "DrTolentino") {
      var snd = this.assets.getAsset("../assets/sound/kungfu.mp3");
      snd.play();
      var snd2 = this.assets.getAsset("../assets/sound/chocking.mp3");
      snd2.play();
    }


  }


  playGettingKicked() {

    if (this.name === "Jon") {
      var snd = this.assets.getAsset("../assets/sound/JonSound/JonGettingKicked.mp3");
      snd.play();
    } else if (this.name === "Nick") {
      var snd = this.assets.getAsset("../assets/sound/NickSound/NickGettingKicked.mp3");
      snd.play();
    } else if (this.name === "Chris") {
      var snd = this.assets.getAsset("../assets/sound/ChrisSound/ChrisGettingKicked.mp3");
      snd.play();
    } else if (this.name === "Matt") {
      var snd = this.assets.getAsset("../assets/sound/chocking.mp3");
      snd.play();
    } else if (this.name === "DrChinn") {
      var snd = this.assets.getAsset("../assets/sound/chocking.mp3");
      //snd.play();
    } else if (this.name === "DrTolentino") {
      var snd = this.assets.getAsset("../assets/sound/chocking.mp3");
      snd.play();
    }
  }

  hitMeScotty(damage) {
    if (this.health === 100 && this.opponent.health === 100) {
      var snd = this.assets.getAsset("../assets/sound/fb.mp3");
      snd.play();
    }
    this.health -= damage;
    this.opponent.hitCounter++;
    this.HealthBar.setHealth(this.health);
    if (this.hitCounter > 6) {
      var snd = this.assets.getAsset("../assets/sound/denied.mp3");
      snd.play();
    }
    this.hitCounter = 0;
    this.playHealthSound = true;
  }


  checkHit() {

    this.diff = Math.max(this.x, this.opponent.x) - Math.min(this.x, this.opponent.x);
    if (this.diff <= this.delta) {
      if (this.isMyOpponentReallyHittingMe()) {
        if (!this.amIhittable()) {
          //chek if I'm close enough to be hit
          this.imgettinghit = true;
          this.opponent.hitCounter++;
          this.opponent.score = this.opponent.score + 2;
          if (this.health === 100 && this.opponent.health === 100) {
            var snd = this.assets.getAsset("../assets/sound/fb.mp3");
            snd.play();
          }
          this.health -= this.damage * 5;
          if (this.hitCounter > 6) {
            var snd = this.assets.getAsset("../assets/sound/denied.mp3");
            snd.play();

          }
          this.hitCounter = 0;
          this.playHealthSound = true;
          this.HealthBar.setHealth(this.health);

          var i = Math.round(Math.random());
          if (i === 0) {
            this.playGettingPunched();
          }
          else {
            this.playGettingKicked();
          }
        }
      }
    }
  }

  isMyOpponentReallyHittingMe() {

    return !(this.isBlocking || this.isCrouching
    || this.isHoldingBlock || this.isHoldingCrouch
    || this.isJumping || this.isFalling);

  }

  amIhittable() {

    return (this.isBlocking || this.isCrouching
    || this.isHoldingBlock || this.isHoldingCrouch
    || this.isJumping || this.isFalling);

  }

  distance(a, b) {
    var dx = a.x - b.x;
    return Math.sqrt(dx * dx);
  }

  collide(other) {
    return this.distance(this, other) < 370 / 4;
  }
}