import tinymce from 'tinymce';
import './plugin';

jest.mock('tinymce', () => ({
  PluginManager: {
    add: jest.fn(),
  },
}));

describe('powerpaste plugin', () => {
  let pluginCallback;
  let mockEditor;

  beforeEach(() => {
    jest.clearAllMocks();
    mockEditor = {
      id: 'test-editor',
    };

    // Capture the plugin callback
    tinymce.PluginManager.add.mockImplementation((name, callback) => {
      pluginCallback = callback;
    });

    // Re-require to trigger plugin registration
    jest.isolateModules(() => {
      // eslint-disable-next-line global-require
      require('./plugin');
    });
  });

  it('should register the powerpaste plugin', () => {
    expect(tinymce.PluginManager.add).toHaveBeenCalledWith(
      'powerpaste',
      expect.any(Function),
    );
  });

  it('should return plugin metadata', () => {
    const plugin = pluginCallback(mockEditor, 'test-url');
    const metadata = plugin.getMetadata();

    expect(metadata).toEqual({
      name: 'stub open-source powerpaste',
      url: 'https://github.com/openedx/frontend-components-tinymce-advanced-plugins',
    });
  });

  it('should accept editor and url parameters', () => {
    const plugin = pluginCallback(mockEditor, 'http://example.com');
    expect(plugin).toBeDefined();
    expect(plugin.getMetadata).toBeInstanceOf(Function);
  });

  it('should return an object with getMetadata method', () => {
    const plugin = pluginCallback(mockEditor, 'test-url');
    expect(plugin).toHaveProperty('getMetadata');
    expect(typeof plugin.getMetadata).toBe('function');
  });
});
