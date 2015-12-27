/*jshint node:true*/
'use-strict';

module.exports = {
  description: '',

  normalizeEntityName: function () {},

  afterInstall: function () {
    return this.addBowerPackageToProject('soundmanager', 'V2.97a.20140901');
  }

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

};
