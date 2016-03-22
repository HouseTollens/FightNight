"use strict";

/**
 * Created by httpnick on 1/15/15.
 * Code graciously taken from Chris Marriott.
 */
function Assets() {
  this.successCount = 0;
  this.errorCount = 0;
  this.cache = [];
  this.downloadQueue = [];
}
Assets.prototype.queueDownload = function (path) {
  this.downloadQueue.push(path);
};
Assets.prototype.isDone = function () {
  return this.downloadQueue.length === this.successCount + this.errorCount;
};
Assets.prototype.downloadAll = function (callback) {
  for (var i = 0; i < this.downloadQueue.length; i++) {

    var that = this;
    var path = this.downloadQueue[i];
    var index = path.indexOf('.mp3');

    if (index !== -1) {
      var img = new Audio();
      that.successCount++;
    } else {
      var img = new Image();
    }

    img.addEventListener("load", function () {
      that.successCount++;
      if (that.isDone()) callback();
    });
    img.addEventListener("error", function () {
      that.errorCount++;
      if (that.isDone()) callback();
    });
    img.src = path;
    this.cache[path] = img;
  }
};
Assets.prototype.getAsset = function (path) {
  return this.cache[path];
};