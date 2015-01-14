module.exports = {
  book: {
    assets: ".",
    js: [
    ],
    html: {
      "head:end": function() {
        var config = this.options.pluginsConfig.customtheme || {js:[], css:[], host: 'github'};
        var updateElements;
        updateElements = '';
        var getPathHierarchy = function() {
          var temp = '';
          var depth = this._output.split('/');
          for (var i in depth) {
            temp += '../';
          }
          return temp;
        };
        var resolvePath = function(fileName) {
          var temp = fileName.replace('../', '');
          return  getPathHierarchy() + (config.host === 'gitbook' ? 'content/' : '') + temp;
        };
        if (config.js && config.js.length > 0) {
          for (var i in config.js) {
            updateElements += '<script type="text/javascript" src="' + resolvePath(config.js[i]) + '"></script>';
          }
        }
        if (config.css && config.css.length > 0) {
          var temp;
          for (var i in config.css) {
            temp = config.css[i].replace('../', '');
            temp =  (config.host === 'gitbook' ? 'content/' : '') + temp;
            updateElements += '<link rel="stylesheet" type="text/css" href="' + resolvePath(config.css[i]) +'">';
          }
        }
        return updateElements;
      }
    }
  }
};
