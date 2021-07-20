<template>
  <div class="About">
    <page-header :title="$t('数値の入力ミスに関するお知らせ')" />
    <static-card>
      <app-link
        to="https://sagamihara-stopcovid19.com/info/0720"
        :icon-size="12"
        >{{ $t('2021年7月21日発表分 (別タブで開きます)') }}
      </app-link>
      <br />
      <br />
      {{
        $t(
          '当サイトにて数値入力ミスを発見した場合、下記リンクよりご報告ください。'
        )
      }}<br />
      <br />
      <app-link to="https://forms.gle/YoPFs1u8h9dScUjZ9" :icon-size="12"
        >{{
          $t('数値入力ミスに関する報告フォーム(外部サービスを使用しています)')
        }}
      </app-link>
      <br />
      <v-divider />
      <br />
      {{ $t('このページに関する問い合わせは、') }}
      <a href="mailto:contact@sagamihara-stopcovid19.com"
        >contact@sagamihara-stopcovid19.com</a
      >
      {{
        $t(
          'までお願いします。(問い合わせの際は、氏名と共にお問い合わせ内容を記入してください。)'
        )
      }}
    </static-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

import AppLink from '@/components/_shared/AppLink.vue'
import PageHeader from '@/components/_shared/PageHeader.vue'
import StaticCard from '@/components/_shared/StaticCard.vue'

export default Vue.extend({
  components: {
    PageHeader,
    StaticCard,
    AppLink,
  },
  head(): MetaInfo {
    return {
      title: this.$t('数値の入力ミスに関するお知らせ') as string,
    }
  },
  methods: {
    formatDate(date) {
      return `${this.$d(date, 'date')}`
    },
  },
})
</script>
