<template>
  <v-col cols="12" md="6" class="DataCard ConfirmedCasesDetailsCard">
    <client-only>
      <data-view
        :title="$t('検査陽性者の状況')"
        :title-id="'details-of-confirmed-cases'"
        :date="date"
      >
        <template #additionalDescription>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{ $t('このデータの更新は、土・日・祝日は行わない') }}
            </li>
          </ul>
        </template>
        <confirmed-cases-details-table
          :aria-label="$t('検査陽性者の状況')"
          v-bind="confirmedCases"
        />
      </data-view>
    </client-only>
  </v-col>
</template>

<script>
import dayjs from 'dayjs'

import ConfirmedCasesDetailsTable from '@/components/ConfirmedCasesDetailsTable.vue'
import DataView from '@/components/DataView.vue'
import Data from '@/data/data.json'
import formatConfirmedCases from '@/utils/formatConfirmedCases'

const options = {
  components: {
    DataView,
    ConfirmedCasesDetailsTable,
  },
  data() {
    const mainSummary = Data.main_summary
    // 検査陽性者の状況
    const confirmedCases = formatConfirmedCases(mainSummary)

    const date = dayjs(mainSummary.children[0].date).format('YYYY/MM/DD HH:mm')

    return {
      confirmedCases,
      date,
    }
  },
}

export default options
</script>

<style lang="scss" module>
.button {
  margin: 20px 0 0;
  color: $green-1 !important;
  text-decoration: none;
  &:hover {
    color: $white !important;
  }

  @include button-text('sm');
}
</style>
