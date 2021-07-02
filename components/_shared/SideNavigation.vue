<template>
  <div ref="Side" class="SideNavigation" tabindex="-1">
    <header class="SideNavigation-Header">
      <v-icon
        ref="Open"
        class="SideNavigation-OpenIcon"
        :aria-label="$t('サイドメニュー項目を開く')"
        @click="$emit('open-navigation', $event)"
      >
        {{ mdiMenu }}
      </v-icon>
      <h1 class="SideNavigation-HeaderTitle">
        <app-link :to="localePath('/')" class="SideNavigation-HeaderLink">
          <img
            class="SideNavigation-HeaderLogo"
            :src="logoSrc"
            width="111"
            height="28"
            :alt="$t('相模原市')"
          />
          <div class="SideNavigation-HeaderText">
            {{ $t('menu/新型コロナウイルス感染症') }}<br />{{
              $t('menu/対策サイト')
            }}
          </div>
        </app-link>
      </h1>
    </header>

    <div
      v-if="isNaviOpen || $vuetify.breakpoint.smAndUp"
      :class="['SideNavigation-Body', { '-opened': isNaviOpen }]"
    >
      <v-icon
        class="SideNavigation-CloseIcon"
        :aria-label="$t('サイドメニュー項目を閉じる')"
        @click="$emit('close-navigation', $event)"
      >
        {{ mdiClose }}
      </v-icon>

      <nav class="SideNavigation-Menu">
        <div class="SideNavigation-Language">
          <div v-if="$i18n.locales.length > 1" class="SideNavigation-Language">
            <label
              ref="LanguageLabel"
              class="SideNavigation-LanguageLabel"
              for="LanguageSelector"
              tabindex="-1"
            >
              {{ $t('多言語対応選択メニュー') }}<br />{{
                $t('Powered by Google Translation')
              }}
            </label>
            <language-selector />
          </div>
        </div>
        <menu-list :items="items" @click="$emit('close-navigation', $event)" />
      </nav>

      <footer class="SideNavigation-Footer">
        <ul class="SideNavigation-Social">
          <li class="SideNavigation-SocialLink-ListItem">
            <app-link
              to="https://line.me/R/ti/p/%40360lkhth"
              :show-icon="false"
              class="SideNavigation-SocialLink"
            >
              <picture>
                <source srcset="/line.webp" type="image/webp" />
                <img src="/line.png" width="130" height="130" alt="LINE" />
              </picture>
            </app-link>
          </li>
          <li class="SideNavigation-SocialLink-ListItem">
            <app-link
              to="https://twitter.com/sagami_covid19"
              :show-icon="false"
              class="SideNavigation-SocialLink"
            >
              <picture>
                <source srcset="/twitter.webp" type="image/webp" />
                <img
                  src="/twitter.png"
                  width="130"
                  height="130"
                  alt="Twitter"
                />
              </picture>
            </app-link>
          </li>
          <li class="SideNavigation-SocialLink-ListItem">
            <app-link
              to="https://github.com/Murayu0225/covid19-chocolate"
              :show-icon="false"
              class="SideNavigation-SocialLink"
            >
              <picture>
                <source srcset="/github.webp" type="image/webp" />
                <img src="/github.png" width="130" height="130" alt="GitHub" />
              </picture>
            </app-link>
          </li>
          <li class="SideNavigation-SocialLink-ListItem">
            <app-link
              to="https://www.youtube.com/user/SagamiharaCityOffice/videos"
              :show-icon="false"
              class="SideNavigation-SocialLink"
            >
              <picture>
                <source srcset="/youtube.webp" type="image/webp" />
                <img
                  src="/youtube.png"
                  width="130"
                  height="130"
                  alt="YouTube"
                />
              </picture>
            </app-link>
          </li>
        </ul>
        <i18n
          tag="small"
          path="このサイトの内容物は{creativeCommons}の下に提供されています。（ただし商標等の他団体が権利を持つものは除く）"
          class="SideNavigation-Copyright"
        >
          <template #creativeCommons>
            <app-link
              :to="$t('https://creativecommons.org/licenses/by/4.0/deed.ja')"
              :icon-size="12"
              class="SideNavigation-LicenseLink"
            >
              {{ $t('クリエイティブ・コモンズ 表示 4.0 ライセンス') }}
            </app-link>
          </template>
        </i18n>
        <small class="SideNavigation-Copyright">
          &copy; 2020 Yu Muramatsu
        </small>
        <br />
        <span id="ss_img_wrapper_2021gmogs_100-50_ja_t">
          <a href="https://jp.globalsign.com/" target="_blank" rel="nofollow"
            ><img
              id="ss_img"
              alt="SSL GMOグローバルサインのサイトシール"
              border="0"
              src="//seal.globalsign.com/SiteSeal/images/gs_noscript_100-50_ja.gif"
          /></a>
        </span>
        <script
          type="text/javascript"
          src="//seal.globalsign.com/SiteSeal/2021gmogs_100-50_ja_t.js"
          defer="defer"
        >
          // eslint-disable-next-line vue/html-self-closing
        </script>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import {
  mdiAccountMultiple,
  mdiChartTimelineVariant,
  mdiClose,
  mdiDomain,
  mdiMenu,
  mdiNeedle,
} from '@mdi/js'
import Vue from 'vue'
import { TranslateResult } from 'vue-i18n'

import AppLink from '@/components/_shared/AppLink.vue'
import LanguageSelector from '@/components/_shared/SideNavigation/LanguageSelector.vue'
import MenuList from '@/components/_shared/SideNavigation/MenuList.vue'

type Item = {
  iconPath?: string
  svg?: string
  title: TranslateResult
  link: string
  divider?: boolean
}

export default Vue.extend({
  components: {
    LanguageSelector,
    MenuList,
    AppLink,
  },
  props: {
    isNaviOpen: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      mdiClose,
      mdiMenu,
    }
  },
  computed: {
    items(): Item[] {
      return [
        {
          iconPath: mdiChartTimelineVariant,
          title: this.$t('市内の最新感染動向'),
          link: this.localePath('/'),
        },
        {
          svg: 'CovidIcon',
          title: this.$t('新型コロナウイルス感染症が心配なときに.nav'),
          link: 'https://www.city.sagamihara.kanagawa.jp/shisei/koho/1019896.html',
        },
        {
          iconPath: mdiAccountMultiple,
          title: this.$t('市民の皆様へ'),
          link: 'https://www.city.sagamihara.kanagawa.jp/kurashi/kenko/kansenyobo/1019910/1020293.html',
        },
        {
          iconPath: mdiDomain,
          title: this.$t('企業の皆様・はたらく皆様へ'),
          link: this.localePath('/worker'),
        },
        {
          iconPath: mdiNeedle,
          title: this.$t('ワクチンについて'),
          link: 'https://www.city.sagamihara.kanagawa.jp/kurashi/kenko/kansenyobo/1019910/1022588/index.html',
          divider: true,
        },
        {
          title: this.$t('市民利用施設に関する情報'),
          link: 'https://www.city.sagamihara.kanagawa.jp/shisei/koho/1019215.html',
        },
        {
          title: this.$t('イベントに関する情報'),
          link: 'https://www.city.sagamihara.kanagawa.jp/shisei/koho/1019175.html',
        },
        {
          title: this.$t('相模原市医師会 新型コロナウイルス特設サイト'),
          link: 'https://www.sagamihara.kanagawa.med.or.jp/covid19',
        },
        {
          title: this.$t('市長からのメッセージ'),
          link: 'https://www.city.sagamihara.kanagawa.jp/channel/1012225/1019894/index.html',
        },
        {
          title: this.$t('神奈川県内の最新感染動向'),
          link: 'https://www.pref.kanagawa.jp/osirase/1369/',
          divider: true,
        },
        {
          title: this.$t('お問い合わせ先一覧'),
          link: this.localePath('/contacts'),
        },
        {
          title: this.$t('当サイトの開発情報'),
          link: 'https://note.com/murayu0225/m/m6c7a40a8fcf9',
        },
        {
          title: this.$t('当サイトの稼働状況'),
          link: 'https://sagamiharastopcivid19.statuspage.io/',
        },
        {
          title: this.$t(
            '改善・アンケートフォームはこちら（外部サービスを使用しています）'
          ),
          link: 'https://forms.gle/Vf9ZwjZq7aFjhzjCA',
        },
        {
          title: this.$t('当サイトについて'),
          link: this.localePath('/about'),
        },
        {
          title: this.$t('相模原市公式ホームページ'),
          link: 'https://www.city.sagamihara.kanagawa.jp/index.html',
        },
      ]
    },
    logoSrc(): string {
      switch (this.$i18n.locale) {
        case 'ja':
        case 'zh-cn':
        case 'zh-tw':
          return '/logo.svg'
        case 'ko':
          return '/logo-ko.png'
        default:
          return '/logo-en.png'
      }
    },
  },
  watch: {
    $route: 'handleChangeRoute',
    '$vuetify.breakpoint.xsOnly'(value) {
      const $Side = this.$refs.Side as HTMLElement | undefined
      if ($Side) {
        if (value) {
          $Side.setAttribute('role', 'dialog')
          $Side.setAttribute('aria-modal', 'true')
        } else {
          $Side.removeAttribute('role')
          $Side.removeAttribute('aria-modal')
        }
      }
    },
    isNaviOpen(value) {
      this.handleNavFocus(value)
    },
  },
  methods: {
    handleChangeRoute() {
      // nuxt-link で遷移するとフォーカスが残り続けるので $route を監視して SideNavigation にフォーカスする
      return this.$nextTick().then(() => {
        const $Side = this.$refs.Side as HTMLEmbedElement | undefined
        if ($Side) {
          $Side.focus()
        }
      })
    },
    handleNavFocus(isNaviOpen: boolean) {
      return this.$nextTick(() => {
        if (isNaviOpen) {
          const $LanguageLabel = this.$refs.LanguageLabel as HTMLElement
          $LanguageLabel.focus()
        } else {
          const $Open = this.$refs.Open as Vue
          const $OpenElement = $Open.$el as HTMLButtonElement
          $OpenElement.focus()
        }
      })
    },
  },
})
</script>

<style lang="scss" scoped>
:focus {
  outline: none;
}

.SideNavigation {
  position: relative;
  @include lessThan($small) {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
  }
  &:focus {
    outline: 1px dotted $gray-3;
  }
}

.SideNavigation-Header {
  height: 64px;
  padding-left: 52px;
  @include largerThan($small) {
    height: auto;
    padding: 20px;
  }
  @include lessThan($small) {
    display: flex;
  }
  @include lessThan($tiny) {
    padding-left: 44px;
  }
}

.SideNavigation-OpenIcon {
  position: absolute;
  top: 0;
  left: 0;
  padding: 18px 8px 18px 16px;
  font-size: 28px;
  @include lessThan($tiny) {
    font-size: 24px;
    padding: 20px 10px;
  }
  @include largerThan($small) {
    display: none;
  }
}

.SideNavigation-CloseIcon {
  position: absolute;
  top: 0;
  left: 0;
  padding: 18px 8px 18px 16px;
  font-size: 28px;
  @include lessThan($tiny) {
    font-size: 24px;
    padding: 20px 10px;
  }
  @include largerThan($small) {
    display: none;
  }
}

.SideNavigation-HeaderTitle {
  width: 100%;
  color: #707070;
  font-weight: 600;
  @include font-size(13);
  @include largerThan($small) {
    margin: 0;
    margin-top: 10px;
  }
}

.SideNavigation-HeaderLink {
  display: flex;
  align-items: center;
  padding-right: 10px;
  @include lessThan($small) {
    height: 64px;
  }
  @include lessThan($tiny) {
    justify-content: space-between;
  }
  &:link,
  &:hover,
  &:focus,
  &:visited,
  &:active {
    color: inherit;
    text-decoration: none;
  }

  &:hover,
  &:focus {
    font-weight: 600;
  }

  &:focus {
    outline: dotted $gray-3 1px;
  }

  @include largerThan($small) {
    display: block;
    padding: 15px 0;
  }
}

.SideNavigation-HeaderLogo {
  @include lessThan($tiny) {
    width: 100px;
  }
}

.SideNavigation-HeaderText {
  margin: 10px 0 0 0;
  @include lessThan($small) {
    margin: 0 0 0 10px;
  }

  @include lessThan($tiny) {
    margin: 0;
  }
}

.SideNavigation-Body {
  padding: 0 20px 20px;
  @include lessThan($small) {
    display: none;
    padding: 0 36px 36px;
    &.-opened {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      display: block !important;
      width: 100%;
      z-index: z-index-of(opened-side-navigation);
      background-color: $white;
      height: 100%;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    }
  }
}

.SideNavigation-Menu {
  @include lessThan($small) {
    padding-top: 50px;
  }
}

.SideNavigation-LanguageLabel {
  display: block;
  margin-bottom: 5px;
  @include font-size(14);
}

.SideNavigation-Footer {
  padding-top: 20px;

  .SideNavigation-Social {
    display: flex;
    list-style: none;
    padding: 0;
    margin-bottom: 15px;

    .SideNavigation-SocialLink-ListItem {
      .SideNavigation-SocialLink {
        display: block;
        border: 1px dotted transparent;
        border-radius: 15px;
        color: $gray-3;

        &:link,
        &:hover,
        &:visited,
        &:active {
          color: inherit;
          text-decoration: none;
        }

        &:focus {
          color: inherit;
          text-decoration: none;
          border: 1px dotted $gray-3;
          outline: none;
        }

        picture {
          img {
            width: 30px;
          }
        }
      }

      & + .SideNavigation-SocialLink-ListItem {
        margin-left: 10px;
      }
    }
  }
}

.SideNavigation-Copyright {
  display: inline-block;
  color: $gray-1;
  line-height: 1.3;
  font-weight: 600;
  @include font-size(10);
}

.SideNavigation-LicenseLink {
  &:focus {
    outline: 1px dotted $gray-3;
  }
}
</style>
