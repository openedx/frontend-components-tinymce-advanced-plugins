/* eslint-disable */
import tinymce from 'tinymce';

// disabling lint is necessary, because of the prefer-arrow-callback rule causing the below code to get
// rewritten to a broken state
tinymce.PluginManager.add('a11ychecker', function(editor, url) {
  return {
    getMetadata: function() {
      return {
        name: 'stub open-source accessibility checker',
        url: 'https://github.com/openedx/frontend-components-tinymce-advanced-plugins',
      };
    },
  };
});
