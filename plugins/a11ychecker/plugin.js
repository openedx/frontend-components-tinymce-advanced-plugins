import tinymce from 'tinymce';

// eslint-disable-next-line no-unused-vars
tinymce.PluginManager.add('a11ychecker', (editor, url) => ({
  getMetadata() {
    return {
      name: 'stub open-source accessibility checker',
      url: 'https://github.com/openedx/frontend-components-tinymce-advanced-plugins',
    };
  },
}));
