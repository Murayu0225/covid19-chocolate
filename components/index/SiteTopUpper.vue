<template>
  <div class="SiteTopUpper">
    <whats-new :items="newsItems" :is-emergency="true" />
    <detail-a />
    <lazy-static-info
      v-if="$vuetify.breakpoint.smAndUp || showStaticInfo"
      class="mb-4"
      :url="'https://www.city.sagamihara.kanagawa.jp/shisei/koho/1019896.html'"
      :text="
        $t(' 自分や家族の症状に不安や心配があれば、\n まずは電話相談をどうぞ')
      "
      :btn-text="$t('相談の手順を見る')"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import DetailA from '@/components/index/SiteTopUpper/DetailA.vue'
import WhatsNew from '@/components/index/SiteTopUpper/WhatsNew.vue'
import {
  News as INews,
  NewsItem as INewsItem,
} from '@/libraries/auto_generated/data_converter/convertNews'

type Data = {}
type Methods = {}
type Computed = {
  newsItems: INewsItem[]
  news: INews
}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    WhatsNew,
    VaccineInfoCard,
    DetailA,
  },
  computed: {
    newsItems() {
      return this.news.newsItems
    },
    news() {
      return this.$store.state.news
    },
  },
})
</script>
