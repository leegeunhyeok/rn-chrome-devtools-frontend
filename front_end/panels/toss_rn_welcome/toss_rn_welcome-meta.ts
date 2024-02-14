import * as i18n from '../../core/i18n/i18n.js';
import * as Root from '../../core/root/root.js';
import * as UI from '../../ui/legacy/legacy.js';

import type * as RNWelcome from './toss_rn_welcome.js';

const UIStrings = {
  /**
   * @description 탭 제목
   */
  title: 'Welcome',

  /**
   * @description 환영 패널 열기 커맨드 문구
   */
  showPanel: 'Show Toss React Native Debugger Welcome panel',
};
const str_ = i18n.i18n.registerUIStrings('panels/toss_rn_welcome/toss_rn_welcome-meta.ts', UIStrings);
const i18nLazyString = i18n.i18n.getLazilyComputedLocalizedString.bind(undefined, str_);

let loadedRNWelcomeModule: (typeof RNWelcome|undefined);

async function loadRNWelcomeModule(): Promise<typeof RNWelcome> {
  if (!loadedRNWelcomeModule) {
    loadedRNWelcomeModule = await import('./toss_rn_welcome.js');
  }
  return loadedRNWelcomeModule;
}

UI.ViewManager.registerViewExtension({
  location: UI.ViewManager.ViewLocationValues.PANEL,
  id: 'toss-rn-welcome',
  title: i18nLazyString(UIStrings.title),
  commandPrompt: i18nLazyString(UIStrings.showPanel),
  order: -10,
  persistence: UI.ViewManager.ViewPersistence.PERMANENT,
  async loadView() {
    const RNWelcome = await loadRNWelcomeModule();
    return RNWelcome.TossRNWelcome.TossRNWelcomeImpl.instance();
  },
  experiment: Root.Runtime.ExperimentName.REACT_NATIVE_SPECIFIC_UI,
});
