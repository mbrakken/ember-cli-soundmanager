import soundManager from 'soundmanager';
import ENV from '../config/environment';

export function initialize(/* container, application */) {

  var url;
  if (ENV.environment === 'development') {
    url = '/soundmanager/swf/soundmanager2_debug.swf';
  } else {
    url = '/soundmanager/swf/soundmanager2.swf';
  }
  soundManager.setup({
    url: url
  });
}

export default {
  name: 'ember-cli-soundmanager',
  initialize
};
