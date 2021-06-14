<template>
  <cards-lazy-row :rows="rows" />
</template>

<script lang="ts">
/* eslint-disable simple-import-sort/imports -- ブラウザでの表示順に合わせて各 card の component を import する */
import Vue from 'vue'

import CardsLazyRow from '@/components/index/_shared/CardsLazyRow.vue'

// 検査陽性者の状況
const ConfirmedCasesDetailsCard = () =>
  import('@/components/index/CardsMonitoring/ConfirmedCasesDetails/Card.vue')
// モニタリング項目
const MonitoringItemsOverviewCard = () =>
  import('@/components/index/CardsMonitoring/MonitoringItemsOverview/Card.vue')
// 報告日別陽性者数
const ConfirmedCasesNumberCard = () =>
  import('@/components/index/CardsMonitoring/ConfirmedCasesNumber/Card.vue')
// 新規陽性者数
const MonitoringConfirmedCasesNumberCard = () =>
  import(
    '@/components/index/CardsMonitoring/MonitoringConfirmedCasesNumber/Card.vue'
  )
const ConfirmedCasesByMunicipalitiesCard = () =>
  import(
    '@/components/index/CardsReference/ConfirmedCasesByMunicipalities/Card.vue'
  )
const DeathsByDeathDateCard = () =>
  import('@/components/index/CardsReference/DeathsByDeathDate/Card.vue')
const PositiveNumberByDiagnosedDateCard = () =>
  import(
    '@/components/index/CardsReference/PositiveNumberByDiagnosedDate/Card.vue'
  )
const PositiveNumberByDevelopedDateCard = () =>
  import(
    '@/components/index/CardsReference/PositiveNumberByDevelopedDate/Card.vue'
  )
const ConfirmedCasesByAgeCard = () =>
  import('@/components/index/CardsReference/ConfirmedCasesByAge/Card.vue')
const TestedNumberCard = () =>
  import('@/components/index/CardsReference/TestedNumber/Card.vue')
/* eslint-enable simple-import-sort/imports */

export default Vue.extend({
  components: {
    CardsLazyRow,
  },
  data() {
    return {
      rows: [
        [ConfirmedCasesDetailsCard, MonitoringItemsOverviewCard],
        [ConfirmedCasesNumberCard, MonitoringConfirmedCasesNumberCard],
        [ConfirmedCasesByMunicipalitiesCard, DeathsByDeathDateCard],
        [PositiveNumberByDiagnosedDateCard, PositiveNumberByDevelopedDateCard],
        [ConfirmedCasesByAgeCard, TestedNumberCard],
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.AttentionNote {
  margin: 10px 0;
  padding: 12px;
  background-color: $emergency;
  border-radius: 4px;
  color: $gray-2;
  @include font-size(12);

  p {
    margin: 0;
  }
}
</style>
