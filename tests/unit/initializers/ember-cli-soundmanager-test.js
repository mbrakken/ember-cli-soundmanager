import Ember from 'ember';
import EmberCliSoundmanagerInitializer from '../../../initializers/ember-cli-soundmanager';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | ember cli soundmanager', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  EmberCliSoundmanagerInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
