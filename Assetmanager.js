class AssetManager{
  var AssetsLoader = require('assets-loader');

  constructor() {
    this.loader = new AssetsLoader();
  }

  loadAssets(assetList) {
    this.loader.add(assetList);
    this.loader.start();
  }

  destroyManager() {
    this.loader.destroy();
  }
}