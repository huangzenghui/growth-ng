import 'react-native';
import scenes from '../../src/navigation/index';

jest.mock('react-native-fs', () => ({
  writeFile: jest.fn(() => Promise.resolve()),
  ExternalStorageDirectoryPath: 'package-path',
}));

describe('router test', () => {
  it('test router should currently', () => {
    expect(scenes.comingSoon.component.name).toBe('ComingSoonView');
  });

  it('should return correct tabs key', () => {
    const tabs = scenes.tabs.children;

    expect(tabs[0]).toBe('home');
    expect(tabs[1]).toBe('discover');
    expect(tabs[2]).toBe('skillTree');
    expect(tabs[3]).toBe('community');
    expect(tabs[4]).toBe('practises');
  });
});
