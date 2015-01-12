# gitbook-plugin-customtheme

Custom theme plugin enables to inject css and js into the html body of the gitbook. Thus custom Styling or behaviour to the
gitbook can be integrated by passing the styles along with configurations.

# Usage Example

1. **Install the plugin**
    Install the plugin from NPM registry, by executing the command 'npm install --save gitbook-plugin-customtheme'

2. **Add the Plugin**
          "plugins": ["customtheme"]

3. **Configuring the plugin**
         "pluginsConfig": {
            "customtheme": {
              "css": ['../custom/css/app.css'],
              "js": ['../custom/js/app.js'],
            }
         }

