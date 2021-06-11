<template>
  <v-col cols="12" md="6" class="DataCard ConfirmedCasesByAgeCard">
    <client-only>
      <confirmed-cases-by-age-table
        :title="$t('年代別の陽性者数')"
        :title-id="'number-of-confirmed-cases-by-age'"
        :chart-data="ageTable"
        :date="date"
        :info="info"
      >
        <template #additionalDescription>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{ $t('このデータの更新は、土・日・祝日は行わない') }}
            </li>
          </ul>
        </template>
      </confirmed-cases-by-age-table>
    </client-only>
  </v-col>
</template>

<script>
import dayjs from 'dayjs'

// table タグとの衝突を避けるため ConfirmedCasesByAgeTable とする
import ConfirmedCasesByAgeTable from '@/components/index/CardsReference/ConfirmedCasesByAge/Table.vue'
import Data from '@/data/infection_medicalcareprovision_status.json'
import { getCommaSeparatedNumberToFixedFunction } from '~/utils/monitoringStatusValueFormatters'

const countFormatter = getCommaSeparatedNumberToFixedFunction()

export default {
  components: {
    ConfirmedCasesByAgeTable,
  },
  data() {
    const { datasets, agedate } = Data

    const formattedDate = dayjs(agedate).format('YYYY/MM/DD HH:mm')

    // 年齢別の陽性者数
    const ageTable = {
      headers: [],
      datasets: [],
    }

    // ヘッダーを設定
    ageTable.headers = [
      { text: this.$t('年代'), value: 'age', align: 'center' },
      { text: this.$t('合計'), value: 'count', align: 'center' },
    ]

    // データをソート
    const ageOrder = [
      '10歳未満',
      '10代',
      '20代',
      '30代',
      '40代',
      '50代',
      '60代',
      '70代',
      '80代',
      '90代',
      '100歳以上',
    ]
    datasets.data
      .sort((a, b) => {
        // 全体を合計でソート
        if (a.count === b.count) {
          return 0
        } else if (a.count > b.count) {
          return 1
        } else {
          return -1
        }
      })
      .sort((a, b) => {
        // 年代順にソート
        return ageOrder.indexOf(a.age) - ageOrder.indexOf(b.age)
      })

    // データを追加
    ageTable.datasets = datasets.data
      .filter((d) => d.age !== '小計')
      .map((d) => {
        const age = this.$t(d.age)
        const count = countFormatter(d.count)
        return { age, count }
      })

    const info = {
      sText: this.$t('{date}の累計', {
        date: this.$d(new Date(datasets.date), 'date'),
      }),
    }

    return {
      date: formattedDate,
      ageTable,
      info,
    }
  },
}
</script>
