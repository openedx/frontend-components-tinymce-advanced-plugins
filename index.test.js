import * as exports from './index';

// Mock tinymce and its plugins
jest.mock('tinymce/plugins/link', () => 'link-plugin', { virtual: true });
jest.mock('tinymce/plugins/lists', () => 'lists-plugin', { virtual: true });
jest.mock('tinymce/plugins/table', () => 'table-plugin', { virtual: true });
jest.mock('tinymce/plugins/hr', () => 'hr-plugin', { virtual: true });
jest.mock('tinymce/plugins/codesample', () => 'codesample-plugin', { virtual: true });
jest.mock('tinymce/plugins/emoticons', () => 'emoticons-plugin', { virtual: true });
jest.mock('tinymce/plugins/emoticons/js/emojis', () => 'emojis-data', { virtual: true });
jest.mock('tinymce/plugins/charmap', () => 'charmap-plugin', { virtual: true });
jest.mock('tinymce/plugins/code', () => 'code-plugin', { virtual: true });
jest.mock('tinymce/plugins/autoresize', () => 'autoresize-plugin', { virtual: true });
jest.mock('tinymce/plugins/image', () => 'image-plugin', { virtual: true });
jest.mock('tinymce/plugins/imagetools', () => 'imagetools-plugin', { virtual: true });
jest.mock('tinymce/plugins/quickbars', () => 'quickbars-plugin', { virtual: true });

describe('index exports', () => {
  describe('custom plugins', () => {
    it('should export a11ychecker', () => {
      expect(exports.a11ychecker).toBeDefined();
    });

    it('should export a11ycheckerCss', () => {
      expect(exports.a11ycheckerCss).toBeDefined();
    });

    it('should export powerpaste', () => {
      expect(exports.powerpaste).toBeDefined();
    });
  });

  describe('tinymce standard plugins', () => {
    it('should export link plugin', () => {
      expect(exports.link).toBeDefined();
    });

    it('should export lists plugin', () => {
      expect(exports.lists).toBeDefined();
    });

    it('should export table plugin', () => {
      expect(exports.table).toBeDefined();
    });

    it('should export hr plugin', () => {
      expect(exports.hr).toBeDefined();
    });

    it('should export codesample plugin', () => {
      expect(exports.codesample).toBeDefined();
    });

    it('should export emoticons plugin', () => {
      expect(exports.emoticons).toBeDefined();
    });

    it('should export emojis data', () => {
      expect(exports.emojis).toBeDefined();
    });

    it('should export charmap plugin', () => {
      expect(exports.charmap).toBeDefined();
    });

    it('should export code plugin', () => {
      expect(exports.code).toBeDefined();
    });

    it('should export autoresize plugin', () => {
      expect(exports.autoresize).toBeDefined();
    });

    it('should export image plugin', () => {
      expect(exports.image).toBeDefined();
    });

    it('should export imagetools plugin', () => {
      expect(exports.imagetools).toBeDefined();
    });

    it('should export quickbars plugin', () => {
      expect(exports.quickbars).toBeDefined();
    });
  });

  describe('export count', () => {
    it('should export exactly 16 items', () => {
      const exportKeys = Object.keys(exports);
      expect(exportKeys).toHaveLength(16);
    });
  });
});
