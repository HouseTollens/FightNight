class Assets {
  constructor() {
    this.successCount = 0;
    this.errorCount = 0;
    this.cache = [];
    this.downloadQueue = [];
  }

  queueDownload(path) {
    this.downloadQueue.push(path);
  }

  isDone() {
    return this.downloadQueue.length === this.successCount + this.errorCount;
  }

  downloadAll(callback) {
    for (var i = 0; i < this.downloadQueue.length; i++) {

      var that = this;
      var path = this.downloadQueue[i];
      var index = (path.indexOf('.mp3'));

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

  getAsset(path) {
    return this.cache[path];
  }
}