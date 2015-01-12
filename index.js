module.exports = {
  book: {
    assets: "./book",
    js: [
    ],
    html: {
      "body:end": function(a) {
        var config = this.options.pluginsConfig.customTheme || {js:[], css:[]};
        var updateElements;
        updateElements = '';
        if (config.js && config.js.length > 0) {
          for (var i in config.js) {
            updateElements += '<script type="text/javascript" src="' + config.js[i] + '"></script>';
          }
        }
        if (config.css && config.css.length > 0) {
          for (var i in config.css) {
            updateElements += '<link rel="stylesheet" type="text/css" href="' + config.css[i] +'">';
          }
        }
        return updateElements;
      }
    }
  }
};