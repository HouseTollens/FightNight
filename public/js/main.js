/**
 * Created by httpnick on 1/27/15.
 * DO YOU SEE THIS CHRIS!?!?!?
 *
 *
 * I See it nick!!
 * I'm really doing it guys - Matt
 * Testing my commits - Jon
 */
function Animate(spriteSheet, startX, startY, frameWidth, frameHeight, frameDuration, frames, loop, reverse) {
    this.spriteSheet = spriteSheet;
    this.startX = startX;
    this.startY = startY;
    this.frameWidth = frameWidth;
    this.frameHeight = frameHeight;
    this.frameDuration = frameDuration;
    this.frames = frames;
    this.totalTime = frameDuration * this.frames;
    this.elapsedTime = 0;
    this.loop = loop;
    this.reverse = reverse;
}
Animate.prototype.drawFrame = function(tick, ctx, x, y) {
    this.elapsedTime += tick;
    if (this.isDone()) {
        if (this.loop) this.elapsedTime = 0;
    }

    var frame = Math.abs(this.reverse ? this.frames - this.currentFrame() - 1: this.currentFrame());
    var xindex = Math.abs((frame % this.frames));

    ctx.drawImage(this.spriteSheet,
        (xindex * this.frameWidth) + this.startX,
        this.startY,
        this.frameWidth,
        this.frameHeight,
        x, y,
        this.frameWidth,
        this.frameHeight);
};

Animate.prototype.drawBook = function(tick, ctx, x, y) {
    this.elapsedTime += tick;
    if (this.isDone()) {
        if (this.loop) this.elapsedTime = 0;
    }
    var frame = this.currentFrame() + 1;
    var x_param, y_param, w, h;
    if (frame  === 1) {
        x_param = 0;
        y_param = 0;
        w = 400;
        h = 500;
    } else if (frame === 2) {
        x_param = 835;
        y_param = 0;
        w = 500;
        h = 400;
    }else if (frame === 3) {
        x_param = 420;
        y_param = 0;
        w = 400;
        h = 500;
    } else if (frame === 4) {
        x_param = 835;
        y_param = 420;
        w = 500;
        h = 400;
    }
    ctx.drawImage(this.spriteSheet,
        x_param,
        y_param,
        w,
        h,
        x, y,
        w*0.13,
        h*0.13);
};
Animate.prototype.currentFrame = function () {
    return Math.floor(this.elapsedTime / this.frameDuration);
};
Animate.prototype.isDone = function() {
// multiplied totalTime by 0.9 here to fix the flickering animations. No problems so far.
    return (this.elapsedTime >= this.totalTime*0.9);
};
function loadCharacters() {
    if (localStorage.getItem("playerOne") === "Nick") {
        characters.push(new Nick(gameEngine, assets.getAsset("../assets/img/nick.png"), 1, assets, "Nick"));
    } else if (localStorage.getItem("playerOne") === "Chris") {
        characters.push(new Chris(gameEngine, assets.getAsset("../assets/img/chris.png"), 1, assets, "Chris"));
    } else if (localStorage.getItem("playerOne") === "Jon") {
        characters.push(new Jon(gameEngine, assets.getAsset("../assets/img/jon.png"), 1, assets, "Jon"));
    } else if (localStorage.getItem("playerOne") === "DrTolentino") {
        characters.push(new DrTolentino(gameEngine, assets.getAsset("../assets/img/tolentino.png"), 1, assets, "DrTolentino"));
    } else if (localStorage.getItem("playerOne") === "DrChinn") {
        characters.push(new DrChinn(gameEngine, assets.getAsset("../assets/img/chinn.png"), 1, assets, "DrChinn"));
    } else if (localStorage.getItem("playerOne") === "Matt") {
        characters.push(new Matt(gameEngine, assets.getAsset("../assets/img/matt.png"), 1, assets, "Matt"));
    }

    if (localStorage.getItem("playerTwo") === "Nick") {
        characters.push(new Nick(gameEngine, assets.getAsset("../assets/img/nick.png"), 2, assets, "Nick"));
    } else if (localStorage.getItem("playerTwo") === "Chris") {
        characters.push(new Chris(gameEngine, assets.getAsset("../assets/img/chris.png"), 2, assets, "Chris"));
    } else if (localStorage.getItem("playerTwo") === "Jon") {
        characters.push(new Jon(gameEngine, assets.getAsset("../assets/img/jon.png"), 2, assets, "Jon"));
    } else if (localStorage.getItem("playerTwo") === "DrTolentino") {
        characters.push(new DrTolentino(gameEngine, assets.getAsset("../assets/img/tolentino.png"), 2, assets, "DrTolentino"));
    } else if (localStorage.getItem("playerTwo") === "DrChinn") {
        characters.push(new DrChinn(gameEngine, assets.getAsset("../assets/img/chinn.png"), 2, assets, "DrChinn"));
    }else if (localStorage.getItem("playerTwo") === "Matt") {
        characters.push(new Matt(gameEngine, assets.getAsset("../assets/img/matt.png"), 2, assets, "Matt"));
    }

    characters[0].setOpponent(characters[1]);
    characters[1].setOpponent(characters[0]);
}

function keyDownHandler(event) {
    if (event.repeat != true) {
        var keyPressed = event.keyCode;
        if (keyPressed === 68) {
            gameEngine.d = true;
        } else if (keyPressed === 65) {
            gameEngine.a = true;
        } else if (keyPressed === 87) {
            gameEngine.w = true;
        } else if (event.keyCode === 81) {
            gameEngine.q = true;
        } else if (keyPressed === 70) {
            gameEngine.f = true;
        } else if (keyPressed === 71) {
            gameEngine.g = true;
        } else if (keyPressed === 69) {
            gameEngine.e = true;
        } else if (keyPressed === 83) {
            gameEngine.s = true;
        } else if (event.keyCode === 38) {
            gameEngine.up = true;
        } else if (event.keyCode === 16) {
            gameEngine.rShift = true;
        } else if (event.keyCode === 39) {
            gameEngine.right = true;
        } else if (event.keyCode === 37) {
            gameEngine.left = true;
        } else if (event.keyCode === 40) {
            gameEngine.down = true;
        } else if (event.keyCode === 188) {
            gameEngine.comma = true;
        } else if (event.keyCode === 190) {
            gameEngine.period = true;
        } else if (event.keyCode === 191) {
            gameEngine.fSlash = true;
        }
    }
    event.preventDefault();
}
function keyUpHandler(event) {
    var keyPressed = String.fromCharCode(event.keyCode);
    if (keyPressed === "D") {
        gameEngine.d = false;
    }/*else if(keyPressed === "W"){
     gameEngine.w = false;
     }*/else if (keyPressed === "A") {
        gameEngine.a = false;
    } /*else if (keyPressed === "F") {
     gameEngine.f = false;
     } else if (keyPressed === "G") {
     gameEngine.g = false;
     } */else if (keyPressed === "Q") {
        gameEngine.q = false;
    } /*else if (keyPressed === "E") {
     gameEngine.e = false;
     } */else if (keyPressed === "S") {
        gameEngine.s = false;
    } /*else if (event.keyCode === 16) {
     gameEngine.rShift = false;
     } else if (event.keyCode === 38) {
     gameEngine.up = false;
     } */else if (event.keyCode === 39) {
        gameEngine.right = false;
    } else if (event.keyCode === 37) {
        gameEngine.left = false;
    } else if (event.keyCode === 40) {
        gameEngine.down = false;
    } else if (event.keyCode === 188) {
        gameEngine.comma = false;
    }/* else if (event.keyCode === 190) {
     gameEngine.period = false;
     } else if (event.keyCode === 191) {
     gameEngine.fSlash = false;
     }*/
    event.preventDefault();
}

var assets = new Assets();
var gameEngine = new GameEngine();
//var cSelect = new CharacterSelect();
var characters = [];
//var currentSelectionNumber = 1;
console.log(localStorage.getItem("playerOne"));
var playeronepic = localStorage.getItem("playerOne");
var playertwopic = localStorage.getItem("playerTwo");
if (playeronepic === 'Nick' || playertwopic === 'Nick') {
    assets.queueDownload("../assets/img/nick.png");
} if (playeronepic === 'Chris' || playertwopic === 'Chris') {
    assets.queueDownload("../assets/img/chris.png");
} if (playeronepic === 'Jon' || playertwopic === 'Jon') {
    assets.queueDownload("../assets/img/jon.png");
} if (playeronepic === 'Matt' || playertwopic === 'Matt') {
    assets.queueDownload("../assets/img/matt.png");
} if (playeronepic === 'DrTolentino' || playertwopic === 'DrTolentino') {
    assets.queueDownload("../assets/img/tolentino.png");
} if (playeronepic === 'DrChinn' || playertwopic === 'DrChinn') {
    assets.queueDownload("../assets/img/chinn.png");
}

var levelNumber = Math.round(Math.random() * (4 - 1) + 1);

if(levelNumber === 1){
    assets.queueDownload("../assets/backgrounds/level01.jpg");

}if(levelNumber === 2){
    assets.queueDownload("../assets/backgrounds/level02.jpg");

}if(levelNumber === 3){
    assets.queueDownload("../assets/backgrounds/level03.jpg");

}if(levelNumber === 4){
    assets.queueDownload("../assets/backgrounds/level04.jpg");

}
assets.queueDownload("../assets/img/logo/mattlogo.png");
assets.queueDownload("../assets/img/logo/jonlogo.png");
assets.queueDownload("../assets/img/logo/chrislogo.png");
assets.queueDownload("../assets/img/logo/nicklogo.png");
assets.queueDownload("../assets/img/logo/drchinnlogo.png");
assets.queueDownload("../assets/img/logo/drtolentinologo.png");
assets.queueDownload("../assets/img/alg-book.png");


assets.queueDownload("../assets/img/blood/1.gif");
assets.queueDownload("../assets/img/blood/2.gif");
assets.queueDownload("../assets/img/blood/3.gif");
assets.queueDownload("../assets/img/blood/4.gif");
assets.queueDownload("../assets/img/blood/5.gif");
assets.queueDownload("../assets/img/blood/6.gif");
assets.queueDownload("../assets/img/blood/7.gif");
assets.queueDownload("../assets/img/blood/8.gif");
assets.queueDownload("../assets/img/blood/9.gif");
assets.queueDownload("../assets/img/blood/10.gif");
assets.queueDownload("../assets/img/blood/11.gif");
assets.queueDownload("../assets/img/blood/12.gif");
assets.queueDownload("../assets/img/blood/13.gif");
assets.queueDownload("../assets/img/blood/14.gif");
assets.queueDownload("../assets/img/blood/15.gif");
assets.queueDownload("../assets/img/blood/16.gif");

assets.queueDownload("../assets/img/combo/3.png");
assets.queueDownload("../assets/img/combo/4.png");
assets.queueDownload("../assets/img/combo/5.png");
assets.queueDownload("../assets/img/combo/6.png");
assets.queueDownload("../assets/img/combo/7.png");
assets.queueDownload("../assets/img/combo/8.png");
assets.queueDownload("../assets/img/combo/9.png");
assets.queueDownload("../assets/img/combo/10.png");
assets.queueDownload("../assets/img/combo/11.png");
assets.queueDownload("../assets/img/combo/12.png");
assets.queueDownload("../assets/img/combo/13.png");
assets.queueDownload("../assets/img/combo/14.png");
assets.queueDownload("../assets/img/combo/15.png");
assets.queueDownload("../assets/img/combo/health.png");
assets.queueDownload("../assets/img/combo/wins.png");

assets.queueDownload("../assets/img/score/0.png");
assets.queueDownload("../assets/img/score/1.png");
assets.queueDownload("../assets/img/score/2.png");
assets.queueDownload("../assets/img/score/3.png");
assets.queueDownload("../assets/img/score/4.png");
assets.queueDownload("../assets/img/score/5.png");
assets.queueDownload("../assets/img/score/6.png");
assets.queueDownload("../assets/img/score/7.png");
assets.queueDownload("../assets/img/score/8.png");
assets.queueDownload("../assets/img/score/9.png");
assets.queueDownload("../assets/img/score/score.png");


/*Jon Sounds*/
assets.queueDownload("../assets/sound/JonSound/JonPunch.mp3");
assets.queueDownload("../assets/sound/JonSound/JonKick.mp3");
assets.queueDownload("../assets/sound/JonSound/JonVictory.mp3");
assets.queueDownload("../assets/sound/JonSound/JonJumping.mp3");
assets.queueDownload("../assets/sound/JonSound/JonGettingKicked.mp3");
assets.queueDownload("../assets/sound/JonSound/JonGettingPunched.mp3");
/*Matt Sounds */
assets.queueDownload("../assets/sound/MattSound/MattPunch.mp3");
assets.queueDownload("../assets/sound/MattSound/MattKick.mp3");
assets.queueDownload("../assets/sound/MattSound/MattVictory.mp3");
assets.queueDownload("../assets/sound/MattSound/MattJumping.mp3");
assets.queueDownload("../assets/sound/MattSound/MattGettingKicked.mp3");
assets.queueDownload("../assets/sound/MattSound/MattGettingPunched.mp3");
/*Nick Sounds */
assets.queueDownload("../assets/sound/NickSound/NickPunch.mp3");
assets.queueDownload("../assets/sound/NickSound/NickKick.mp3");
assets.queueDownload("../assets/sound/NickSound/NickVictory.mp3");
assets.queueDownload("../assets/sound/NickSound/NickJumping.mp3");
assets.queueDownload("../assets/sound/NickSound/NickGettingKicked.mp3");
assets.queueDownload("../assets/sound/NickSound/NickGettingPunched.mp3");
/*Chris Sounds */
assets.queueDownload("../assets/sound/ChrisSound/ChrisPunch.mp3");
assets.queueDownload("../assets/sound/ChrisSound/ChrisKick.mp3");
assets.queueDownload("../assets/sound/ChrisSound/ChrisVictory.mp3");
assets.queueDownload("../assets/sound/ChrisSound/ChrisJumping.mp3");
assets.queueDownload("../assets/sound/ChrisSound/ChrisGettingKicked.mp3");
assets.queueDownload("../assets/sound/ChrisSound/ChrisGettingPunched.mp3");

/*misc sounds */
assets.queueDownload("../assets/sound/misc/PlayerOne.mp3");
assets.queueDownload("../assets/sound/misc/PlayerTwo.mp3");
assets.queueDownload("../assets/sound/bell.mp3");
assets.queueDownload("../assets/sound/kick.mp3");
assets.queueDownload("../assets/sound/kungfu.mp3");
assets.queueDownload("../assets/sound/kungfu2.mp3");
assets.queueDownload("../assets/sound/punch.mp3");
assets.queueDownload("../assets/sound/slap.mp3");
assets.queueDownload("../assets/sound/chocking.mp3");

/* victory sounds*/
assets.queueDownload("../assets/sound/victory/DrChinn.mp3");
assets.queueDownload("../assets/sound/victory/Chris.mp3");
assets.queueDownload("../assets/sound/victory/DrTolentino.mp3");
assets.queueDownload("../assets/sound/victory/FinishHim.mp3");
assets.queueDownload("../assets/sound/victory/Jon.mp3");
assets.queueDownload("../assets/sound/victory/Matt.mp3");
assets.queueDownload("../assets/sound/victory/Nick.mp3");

assets.queueDownload("../assets/sound/hs.mp3");
assets.queueDownload("../assets/sound/denied.mp3");
assets.queueDownload("../assets/sound/fb.mp3");
assets.queueDownload("../assets/sound/dom.mp3");
assets.queueDownload("../assets/sound/godlike.mp3");
assets.queueDownload("../assets/sound/hb.mp3");

assets.downloadAll(function() {
    var canvas = document.getElementById("gameCanvas");
    var ctx = canvas.getContext("2d");
    gameEngine.init(ctx);
    canvas.addEventListener("keydown",keyDownHandler, false);
    canvas.addEventListener("keyup",keyUpHandler, false);
    loadCharacters();
    gameEngine.addBackground(assets.getAsset("../assets/backgrounds/level0"+levelNumber+".jpg"));
    var bell = new Audio("../assets/sound/bell.mp3");
    bell.play();
    gameEngine.assets = assets;
    gameEngine.start();
    gameEngine.addEntity(characters[0]);
    gameEngine.addEntity(characters[1]);
    var level01Music = new Audio("../assets/ost/level01music.mp3");
    level01Music.volume=.1;
    gameEngine.levelMusic = level01Music;
    level01Music.play();
});
