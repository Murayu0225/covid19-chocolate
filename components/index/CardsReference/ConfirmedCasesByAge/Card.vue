<template>
  <v-col cols="12" md="6" class="DataCard ConfirmedCasesByAgeCard">
    <client-only>
      <confirmed-cases-by-age-table
        :title="$t('年代別の陽性者数')"
        :title-id="'number-of-confirmed-cases-by-Age'"
        :chart-data="ageTable"
        :date="date"
        :info="info"
      >
        <template #additionalDescription>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{
                $t(
                  '毎日の発生数等によっては、個人が特定されるおそれがあるため、区別の陽性患者数については週報とする'
                )
              }}
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
    const { datasets, date } = Data

    const formattedDate = dayjs(date).format('YYYY/MM/DD HH:mm')

    // 年齢別の陽性者数
    const ageTable = {
      headers: [],
      datasets: [],
    }

    // ヘッダーを設定
    ageTable.headers = [
      { text: this.$t('年代'), value: 'age' },
      { text: this.$t('合計'), value: 'total', align: 'end' },
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
      null,
    ]
    datasets.data
      .sort((a, b) => {
        // 全体を合計でソート
        if (a.total === b.total) {
          return 0
        } else if (a.total > b.total) {
          return 1
        } else {
          return -1
        }
      })
      .sort((a, b) => {
        // 年齢順にソート
        return ageOrder.indexOf(a.age) - ageOrder.indexOf(b.age)
      })

    // データを追加
    ageTable.datasets = datasets.data
      .filter((d) => d.label !== '小計')
      .map((d) => {
        const age = this.$t(d.age)
        const total = countFormatter(d.total)


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
