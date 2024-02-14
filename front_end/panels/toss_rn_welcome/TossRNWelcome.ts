

import * as UI from '../../ui/legacy/legacy.js';
import * as i18n from '../../core/i18n/i18n.js';

import tossRNWelcomeStyles from './tossRNWelcome.css.js';
import * as LitHtml from '../../ui/lit-html/lit-html.js';

const UIStrings = {
  /** @description 제목 */
  title: 'React Native Debugger for Toss',
  /** @description 환영 문구 */
  welcomeMessage: '이터레이션과 속도, 두 마리 토끼를 잡다',
  /** @description RN 디버깅 문서 링크 텍스트 */
  docsLabel: 'RN 디버깅 공식 문서 바로가기',
  /** @description 토스 RN 위키 링크 텍스트 */
  rnWikiLabel: 'Toss RN 위키 바로가기',
  /** @description 디버깅 가이드 링크 텍스트 */
  guideLabel: '디버깅 기본 가이드 보러가기',
  /** @description 이슈 제보 텍스트 1/2 */
  report0: '개발 중 문제가 발생하거나 궁금한 부분이 생기면',
  /** @description 이슈 제보 텍스트 2/2 */
  report1: '채널에 제보 부탁드려요',
};
const {render, html} = LitHtml;

const str_ = i18n.i18n.registerUIStrings('panels/toss_rn_welcome/TossRNWelcome.ts', UIStrings);
const i18nString = i18n.i18n.getLocalizedString.bind(undefined, str_);

let TossRNWelcomeImplInstance: TossRNWelcomeImpl;

export class TossRNWelcomeImpl extends UI.Widget.VBox {
  static instance(opts: {forceNew: null|boolean} = {forceNew: null}): TossRNWelcomeImpl {
    const {forceNew} = opts;
    if (!TossRNWelcomeImplInstance || forceNew) {
      TossRNWelcomeImplInstance = new TossRNWelcomeImpl();
    }
    return TossRNWelcomeImplInstance;
  }

  private constructor() {
    super(true, true);
  }

  override wasShown(): void {
    super.wasShown();
    this.registerCSSFiles([tossRNWelcomeStyles]);
    this.render();
    UI.InspectorView.InspectorView.instance().showDrawer(true);
  }

  render(): void {
    const tossLogoUrl = new URL(
      "../../Images/toss/logo.png",
      import.meta.url,
    ).toString();

    // u1F449: 👉
    const tossFace1F449 = new URL(
      "../../Images/toss/tossface/u1F449.svg",
      import.meta.url,
    ).toString();

    // u1F4D5: 📕
    const tossFace1F4D5 = new URL(
      "../../Images/toss/tossface/u1F4D5.svg",
      import.meta.url,
    ).toString();

    // u1F41B: 🐛
    const tossFace1F41B = new URL(
      "../../Images/toss/tossface/u1F41B.svg",
      import.meta.url,
    ).toString();

    // TODO: Toss 가이드 링크 추가
    render(html`
      <div class="toss-rn-welcome">
        <header>
          <img class="toss-logo" src=${tossLogoUrl} role="presentation" />
          <h1>${i18nString(UIStrings.title)}</h1>
          <p>${i18nString(UIStrings.welcomeMessage)}</p>
        </header>
        <main>
          <section class="guide">
            <div class="item">
              <img class="emoji" src=${tossFace1F449}>
              <x-link class="link" href="https://reactnative.dev/docs/debugging">
                ${i18nString(UIStrings.docsLabel)}
              </x-link>
            </div>
            <div class="item">
              <img class="emoji" src=${tossFace1F4D5}>
              <x-link class="link" href="#">
                ${i18nString(UIStrings.rnWikiLabel)}
              </x-link>
            </div>
            <div class="item">
              <img class="emoji" src=${tossFace1F41B}>
              <x-link class="link" href="#">
                ${i18nString(UIStrings.guideLabel)}
              </x-link>
            </div>
          </section>
        </main>
        <footer>
          ${i18nString(UIStrings.report0)}
          <span class="tag">#react-native</span>
          ${i18nString(UIStrings.report1)}
        </footer>
      </div>
    `, this.contentElement, {host: this});
  }
}
