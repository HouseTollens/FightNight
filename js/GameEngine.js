/**
 * Created by httpnick on 1/15/15.
 * Code graciously taken (partially) from Seth Ladd and Chris Marriott.
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
    this.w = null;
    this.f = null;
    this.g = null;
    this.d = null;
    this.a = null;
    this.q = null;
    this.e = null;
    this.s = null;
    this.left = null;
    this.right = null;
    this.down = null;
    this.rShift = null;
    this.comma = null;
    this.up = null;
    this.period = null;
    this.fSlash = null;
    this.background = null;
    this.floorY = 500;
}
GameEngine.prototype.init = function (ctx) {
    this.ctx = ctx;
    this.surfaceWidth = this.ctx.canvas.width;
    this.surfaceHeight = this.ctx.canvas.height;
    this.timer = new Timer();
    //this.startInput();
    console.log('game initialized');
};
GameEngine.prototype.start = function(audio) {
    console.log('starting game');
    audio.play();
    var that = this;
    (function gameLoop() {
        that.loop();
        requestAnimFrame(gameLoop, that.ctx.canvas);
    })();
};
GameEngine.prototype.addEntity = function (entity) {
    console.log('added entity');
    this.entities.push(entity);
};
GameEngine.prototype.addBackground = function (background) {
    console.log("added the background");
    this.background = background;
};
GameEngine.prototype.draw = function() {
    this.ctx.clearRect(0, 0, this.surfaceWidth, this.surfaceHeight);
    this.ctx.save();
    this.ctx.drawImage(this.background, 0, 0);
    for(var i = 0; i < this.entities.length; i++) {
        this.entities[i].draw();
    }
    this.ctx.restore();
};
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
};
GameEngine.prototype.loop = function() {
    this.clockTick = this.timer.tick();
    this.update();
    this.draw();
};

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
};