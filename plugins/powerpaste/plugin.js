/* eslint-disable */
import tinymce from 'tinymce';

// disabling lint is necessary, because of the prefer-arrow-callback rule causing the below code to get
// rewritten to a broken state
tinymce.PluginManager.add('powerpaste', function(editor, url) {
  return {
    getMetadata: function() {
      return {
        name: 'stub open-source powerpaste',
        url: 'https://github.com/openedx/frontend-components-tinymce-advanced-plugins',
      };
    },
  };
});
