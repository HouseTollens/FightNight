/**
 * Created by httpnick on 1/15/15.
 * Code graciously taken from Seth Ladd and Chris Marriott.
 */
window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (/* function */ callback, /* DOMElement */ element) {
            window.setTimeout(callback, 1000 / 60);
        };
})();
function GameEngine() {
    this.entities = [];
    this.ctx = null;
    this.surfaceWidth = null;
    this.surfaceHeight = null;
    this.f = null;
    this.g = null;
    this.d = null;
    this.a = null;
}
GameEngine.prototype.init = function (ctx) {
    this.ctx = ctx;
    this.surfaceWidth = this.ctx.canvas.width;
    this.surfaceHeight = this.ctx.canvas.height;
    this.timer = new Timer();
    this.startInput();
    console.log('game initialized');
}
GameEngine.prototype.start = function() {
    console.log('starting game');
    var that = this;
    (function gameLoop() {
        that.loop();
        requestAnimFrame(gameLoop, that.ctx.canvas);
    })();
}
GameEngine.prototype.addEntity = function (entity) {
    console.log('added entity');
    this.entities.push(entity);
}
GameEngine.prototype.draw = function() {
    this.ctx.clearRect(0, 0, this.surfaceWidth, this.surfaceHeight);
    this.ctx.save();
    for(var i = 0; i < this.entities.length; i++) {
        this.entities[i].draw();
    }
    this.ctx.restore();
}
GameEngine.prototype.update = function() {
    var entitiesCount = this.entities.length;
    for (var i = 0; i < entitiesCount; i++) {
        var entity = this.entities[i];
            entity.update();
    }
    /*
    for (var i = this.entities.length-1; i >= 0; --i) {
        if (this.entities[i].removeFromWorld) {
            this.entities.splice(i, 1);
        }
    }
    */
}
GameEngine.prototype.loop = function() {
    this.clockTick = this.timer.tick();
    this.update();
    this.draw();
    this.f = null;
    this.g = null;
    this.d = null;
    this.a = null;
}
GameEngine.prototype.startInput = function () {
    console.log('Starting input');
    console.log('blah');
    var that = this;


    this.ctx.canvas.addEventListener("keypress", function (e) {
        if (String.fromCharCode(e.which) === 'f') that.f = true;
        else if (String.fromCharCode(e.which) === 'g') that.g = true;
        else if (String.fromCharCode(e.which) === 'd') that.d = true;
        else if (String.fromCharCode(e.which) === 'a') that.a = true;
        e.preventDefault();
    }, false);
    console.log("input started");
}
/*GameEngine.prototype.keyPressHandler = function(event) {
    var keyPressed = event.key;
    console.log(keyPressed);
    if (keyPressed === "f") {
        GameEngine.f = true;
    }
} */
function Timer() {
    this.gameTime = 0;
    this.maxStep = 0.05;
    this.wallLastTimeStamp = 0;
}
Timer.prototype.tick = function() {
    var wallCurrent = Date.now();
    var wallDelta = (wallCurrent - this.wallLastTimestamp) / 1000;
    this.wallLastTimestamp = wallCurrent;
    var gameDelta = Math.min(wallDelta, this.maxStep);
    this.gameTime += gameDelta;
    return gameDelta;
}

function keyDownHandler(event) {
    var keyPressed = String.fromCharCode(event.keyCode);

}
function keyUpHandler(event) {
    var keyPressed = String.fromCharCode(event.keyCode);

}