"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Assets = function () {
  function Assets() {
    _classCallCheck(this, Assets);

    this.successCount = 0;
    this.errorCount = 0;
    this.cache = [];
    this.downloadQueue = [];
  }

  _createClass(Assets, [{
    key: "queueDownload",
    value: function queueDownload(path) {
      this.downloadQueue.push(path);
    }
  }, {
    key: "isDone",
    value: function isDone() {
      return this.downloadQueue.length === this.successCount + this.errorCount;
    }
  }, {
    key: "downloadAll",
    value: function downloadAll(callback) {
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
    }
  }, {
    key: "getAsset",
    value: function getAsset(path) {
      return this.cache[path];
    }
  }]);

  return Assets;
}();