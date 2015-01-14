var fs = require("fs");
var fileContentHolder = {};
var getScriptContent = function(fileName) {
  fileName = fileName.replace('../', '');
  if (!fileContentHolder[fileName]) {
    fileContentHolder[fileName] = fs.readFileSync(fileName);
  }
  return '<script type="text/javascript">' + fileContentHolder[fileName] + '</script>'
};
module.exports = {
  book: {
    assets: ".",
    js: [
    ],
    html: {
      "body:end": function(a) {
        var config = this.options.pluginsConfig.customtheme || {js:[], css:[], host: 'github'};
        var updateElements;
        updateElements = '';
        if (config.js && config.js.length > 0) {
          for (var i in config.js) {
            updateElements += getScriptContent(config.js[i]);
          }
        }
        if (config.css && config.css.length > 0) {
          var temp;
          for (var i in config.css) {
            temp = config.css[i].replace('../', '')
            temp =  (config.host === 'gitbook' ? 'content/' : '') + temp;
            updateElements += '<link rel="stylesheet" type="text/css" href="' + '../' + temp +'">';
          }
        }
        return updateElements;
      }
    }
  }
};
