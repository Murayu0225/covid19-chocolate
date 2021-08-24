<template>
  <div>
    <h2 v-if="cardCategory" class="card-title">
      <v-icon>{{ mdiChartTimelineVariant }}</v-icon>
      {{ $t(titles[cardCategory]) }}
    </h2>
    <component :is="cardComponent" />
  </div>
</template>

<script lang="ts">
/* eslint-disable simple-import-sort/imports -- ブラウザでの表示順に合わせて各 card の component を import する */
// ---- モニタリング項目
// 報告日別による陽性者数の推移
import { mdiChartTimelineVariant } from '@mdi/js'
import { Vue, Component } from 'nuxt-property-decorator'
import type { NuxtOptionsHead as MetaInfo } from '@nuxt/types/config/head'
import type { NuxtConfig } from '@nuxt/types'
import ConfirmedCasesNumberCard from '@/components/index/CardsMonitoring/ConfirmedCasesNumber/Card.vue'
// 新規陽性者数
import MonitoringConfirmedCasesNumberCard from '@/components/index/CardsMonitoring/MonitoringConfirmedCasesNumber/Card.vue'
// 検査陽性者の状況
import ConfirmedCasesDetailsCard from '@/components/index/CardsMonitoring/ConfirmedCasesDetails/Card.vue'
// モニタリング状況
import MonitoringItemsOverviewCard from '@/components/index/CardsMonitoring/MonitoringItemsOverview/Card.vue'
// ---- その他 参考指標
// 年代別の陽性者数
import ConfirmedCasesByAgeCard from '@/components/index/CardsReference/ConfirmedCasesByAge/Card.vue'
// 死亡日別による死亡者数の推移
import DeathsByDeathDateCard from '@/components/index/CardsReference/DeathsByDeathDate/Card.vue'
// 確定日別による陽性者数の推移
import PositiveNumberByDiagnosedDateCard from '@/components/index/CardsReference/PositiveNumberByDiagnosedDate/Card.vue'
// 発症日別による陽性者数の推移
import PositiveNumberByDevelopedDateCard from '@/components/index/CardsReference/PositiveNumberByDevelopedDate/Card.vue'
// 陽性者数（区別・週報）
import ConfirmedCasesByMunicipalitiesCard from '@/components/index/CardsReference/ConfirmedCasesByMunicipalities/Card.vue'
// 検査数の状況
import TestedNumberCard from '@/components/index/CardsReference/TestedNumber/Card.vue'
// 新型コロナウイルスワクチン接種者数
import VaccineInfoCard from '@/components/index/CardsReference/VaccineInfo/Card.vue'
// ワクチン接種推移
import Vaccine7Card from '@/components/index/CardsReference/Vaccine7/Card.vue'
// 全世代のワクチン接種状況
import VaccineAllCard from '@/components/index/CardsReference/VaccineAll/Card.vue'
// 12～64歳のワクチン接種状況
import Vaccine1264Card from '@/components/index/CardsReference/Vaccine1264/Card.vue'
// 65歳以上のワクチン接種状況
import VaccinationCard from '@/components/index/CardsReference/VaccineInfo65/Card.vue'

import { getLinksLanguageAlternative } from '@/utils/i18nUtils'
import { convertDateToSimpleFormat } from '@/utils/formatDate'

@Component({
  components: {
    // ---- モニタリング項目
    ConfirmedCasesNumberCard,
    MonitoringConfirmedCasesNumberCard,
    ConfirmedCasesDetailsCard,
    MonitoringItemsOverviewCard,
    // ---- その他 参考指標
    ConfirmedCasesByAgeCard,
    DeathsByDeathDateCard,
    PositiveNumberByDiagnosedDateCard,
    PositiveNumberByDevelopedDateCard,
    ConfirmedCasesByMunicipalitiesCard,
    TestedNumberCard,
    VaccineInfoCard,
    Vaccine7Card,
    VaccineAllCard,
    Vaccine1264Card,
    VaccinationCard,
  },
})
export default class CardContainer extends Vue implements NuxtConfig {
  data() {
    let title, updatedAt, cardComponent, cardCategory
    switch (this.$route.params.card) {
      // NOTE: 以下，ブラウザでの表示順に合わせて条件分岐を行う
      // ---- モニタリング項目
      // 報告日別による陽性者数の推移
      case 'number-of-confirmed-cases':
        cardComponent = 'confirmed-cases-number-card'
        cardCategory = 'monitoring'
        break
      // 新規陽性者数
      case 'monitoring-number-of-confirmed-cases':
        cardComponent = 'monitoring-confirmed-cases-number-card'
        cardCategory = 'monitoring'
        break
      // 検査陽性者の状況
      case 'details-of-confirmed-cases':
        cardComponent = 'confirmed-cases-details-card'
        cardCategory = 'monitoring'
        break
      // モニタリング状況
      case 'monitoring-items-overview':
        cardComponent = 'monitoring-items-overview-card'
        cardCategory = 'monitoring'
        break
      // ---- その他 参考指標
      // 年代別の陽性者数
      case 'number-of-confirmed-cases-by-age':
        cardComponent = 'confirmed-cases-by-age-card'
        cardCategory = 'monitoring'
        break
      // 死亡日別による死亡者数の推移
      case 'deaths-by-death-date':
        cardComponent = 'deaths-by-death-date-card'
        cardCategory = 'monitoring'
        break
      // 確定日別による陽性者数の推移
      case 'positive-number-by-diagnosed-date':
        cardComponent = 'positive-number-by-diagnosed-date-card'
        cardCategory = 'monitoring'
        break
      // 発症日別による陽性者数の推移
      case 'positive-number-by-developed-date':
        cardComponent = 'positive-number-by-developed-date-card'
        cardCategory = 'monitoring'
        break
      // 陽性者数（区別・週報）
      case 'number-of-confirmed-cases-by-municipalities':
        cardComponent = 'confirmed-cases-by-municipalities-card'
        cardCategory = 'monitoring'
        break
      // 検査数の状況
      case 'tested-number':
        cardComponent = 'tested-number-card'
        cardCategory = 'monitoring'
        break
      // 新型コロナウイルスワクチン接種者数
      case 'vaccine-info':
        cardComponent = 'vaccine-info-card'
        cardCategory = 'reference'
        break
      // ワクチン接種推移
      case 'vaccine-7':
        cardComponent = 'vaccine-7-card'
        cardCategory = 'reference'
        break
      // 全世代のワクチン接種状況
      case 'vaccine-all':
        cardComponent = 'vaccine-all-card'
        cardCategory = 'reference'
        break
      // 12～64歳のワクチン接種状況
      case 'vaccine-12-64':
        cardComponent = 'vaccine-12-64-card'
        cardCategory = 'reference'
        break
      // 65歳以上のワクチン接種状況
      case 'vaccination':
        cardComponent = 'vaccination-card'
        cardCategory = 'reference'
    }
    /* eslint-enable simple-import-sort/imports */
    return {
      cardComponent,
      cardCategory,
      title,
      updatedAt,
      mdiChartTimelineVariant,
      titles: {
        monitoring: '感染動向',
        reference: 'ワクチン接種状況',
      },
    }
  }

  head() {
    const url = 'https://sagamihara-stopcovid19.com'
    const timestamp = new Date().getTime()
    const defaultTitle = `${this.$t('相模原市')} ${this.$t(
      '新型コロナウイルス感染症'
    )}${this.$t('対策サイト')}`
    const ogpImage =
      (this.$i18n.locale ?? 'ja') === 'ja'
        ? `${url}/ogp/${this.$route.params.card}.png?t=${timestamp}`
        : `${url}/ogp/${this.$i18n.locale}/${this.$route.params.card}.png?t=${timestamp}`

    const mInfo: MetaInfo = {
      title: `${
        (this.$data.title ?? '') !== ''
          ? this.$data.title + ' | ' + defaultTitle
          : defaultTitle
      }`,
      link: [
        ...(getLinksLanguageAlternative(
          `cards/${this.$route.params.card}`,
          this.$i18n.locales,
          this.$i18n.defaultLocale
        ) as []),
      ],
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${url}${this.$route.path}/`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${
            (this.$data.title ?? '') !== ''
              ? this.$data.title + ' | ' + defaultTitle
              : defaultTitle
          }`,
        },
        {
          hid: 'description',
          name: 'description',
          content: `${this.$t('{date} 更新', {
            date: convertDateToSimpleFormat(this.$data.updatedAt),
          })}: ${this.$tc(
            '当サイトは、相模原市の新型コロナウイルス感染症 (COVID-19) に関する最新情報をグラフ化して提供しております。'
          )}`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `${this.$t('{date} 更新', {
            date: convertDateToSimpleFormat(this.$data.updatedAt),
          })}: ${this.$tc(
            '当サイトは、相模原市の新型コロナウイルス感染症 (COVID-19) に関する最新情報をグラフ化して提供しております。'
          )}`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${ogpImage}`,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: `${ogpImage}`,
        },
      ],
    }
    return mInfo
  }
}
</script>

<style lang="scss">
.card-title {
  @include font-size(24);

  color: $gray-2;
  font-weight: normal;
  padding: 8px 12px;
  @include lessThan($small) {
    @include font-size(20);
  }
}
</style>
