/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-cli-soundmanager',

  blueprintsPath: function(){
    return path.join(__dirname, 'blueprints');
  },

  included: function(app) {
    this._super.included(app);

    this.app.import({
      development: app.bowerDirectory + '/soundmanager/swf/soundmanager2_debug.swf',
      production: app.bowerDirectory + '/soundmanager/swf/soundmanager2.swf'
    });

    this.app.import({
      development: app.bowerDirectory + '/soundmanager/script/soundmanager2.js',
      production: app.bowerDirectory + '/soundmanager/script/soundmanager2-nodebug-jsmin.js'
    });

    this.app.import('vendor/ember-cli-soundmanager/shim.js', {
      type: 'vendor',
      exports: { 'soundmanager': ['default'] }
    });
  }
};
