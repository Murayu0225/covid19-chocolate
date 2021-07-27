<template>
  <div class="Worker">
    <page-header :title="$t('サイトマップ')" />
    <static-card>
      <h3>
        <app-link :to="localePath('/')" class="Sitemap-titleLink">
          <v-icon class="mr-2">
            {{ mdiChartTimelineVariant }}
          </v-icon>
          {{ $t('市内の最新感染動向') }}
        </app-link>
      </h3>
      <section>
        <h4>{{ $t('感染動向') }}</h4>
        <ul class="Sitemap-list">
          <li
            v-for="(card, i) in getCardRoutes('感染動向')"
            :key="`cards-monitoring${i}`"
            class="Sitemap-item"
          >
            <app-link class="Sitemap-linkButton" :to="localePath(card.path)">
              {{ $t(card.title) }}
            </app-link>
          </li>
        </ul>
      </section>
      <section>
        <h4>{{ $t('ワクチン接種状況') }}</h4>
        <ul class="Sitemap-list">
          <li
            v-for="(card, i) in getCardRoutes('ワクチン接種状況')"
            :key="`cards-reference${i}`"
            class="Sitemap-item"
          >
            <app-link class="Sitemap-linkButton" :to="localePath(card.path)">
              {{ $t(card.title) }}
            </app-link>
          </li>
        </ul>
      </section>
    </static-card>
    <static-card>
      <h3>
        <app-link :to="localePath('/worker')" class="Sitemap-titleLink">
          <v-icon class="mr-2">
            {{ mdiDomain }}
          </v-icon>
          {{ $t('企業の皆様・はたらく皆様へ') }}
        </app-link>
      </h3>
      <p>
        {{ $t('事業者の皆様に対する支援情報およびテレワークの推進について') }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <app-link :to="localePath('/about')" class="Sitemap-titleLink">
          {{ $t('当サイトについて') }}
        </app-link>
      </h3>
      <p>
        {{ $t('サイトの目的、アクセシビリティ方針、ブラウザ環境など') }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <app-link :to="localePath('/contacts')" class="Sitemap-titleLink">
          {{ $t('お問い合わせ先一覧') }}
        </app-link>
      </h3>
      <p>
        {{
          $t('お問い合わせ内容別対応局名、電話番号とお問い合わせ対応時間など')
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <app-link :to="localePath('/data')" class="Sitemap-titleLink">
          {{ $t('数値の入力ミスに関するお知らせ') }}
        </app-link>
      </h3>
      <p>
        {{ $t('当サイト内における数値の入力ミスについて') }}
      </p>
      <ul>
        <li>
          {{ $t('過去の報告') }}
        </li>
        <ul>
          <li>
            <app-link :to="localePath('/info/0721')" class="Sitemap-titleLink">
              {{ $t('2021年7月21日発表分') }}
            </app-link>
          </li>
        </ul>
      </ul>
    </static-card>
  </div>
</template>

<script lang="ts">
import { mdiChartTimelineVariant, mdiDomain } from '@mdi/js'
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

import cardData from '@/assets/json/cardRoutesSettings.json'
import AppLink from '@/components/_shared/AppLink.vue'
import PageHeader from '@/components/_shared/PageHeader.vue'
import StaticCard from '@/components/_shared/StaticCard.vue'
import { Settings } from '@/types/cardRoutesSettings'

type Data = {
  mdiChartTimelineVariant: string
  mdiDomain: string
  cardData: Settings[]
}
type Methods = {
  getCardRoutes(category: string): Settings[]
}
type Computed = {}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    PageHeader,
    StaticCard,
    AppLink,
  },
  data() {
    return {
      mdiChartTimelineVariant,
      mdiDomain,
      cardData,
    }
  },
  head(): MetaInfo {
    return {
      title: this.$t('サイトマップ') as string,
    }
  },
  methods: {
    getCardRoutes(category: string) {
      return this.cardData.filter((v) => v.category === category)
    },
  },
})
</script>

<style lang="scss" scoped>
.Sitemap-titleLink {
  display: flex;
  color: $green-1;
  ::v-deep .v-icon {
    color: $green-1;
  }
  svg {
    fill: $green-1;
  }
}
.Sitemap-titleIcon {
  margin-right: 4px;
  min-width: 24px;
}
.Sitemap-list {
  list-style: none;
}
.Sitemap-item {
  display: inline-block;
  margin: 0 12px 12px 0;
}
.Sitemap-linkButton {
  @include button-text('sm');
  &:hover {
    text-decoration: none;
  }
}
</style>
