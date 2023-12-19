import tinymce from 'tinymce';

// eslint-disable-next-line no-unused-vars
tinymce.PluginManager.add('powerpaste', (editor, url) => ({
  getMetadata() {
    return {
      name: 'stub open-source powerpaste',
      url: 'https://github.com/openedx/frontend-components-tinymce-advanced-plugins',
    };
  },
}));
