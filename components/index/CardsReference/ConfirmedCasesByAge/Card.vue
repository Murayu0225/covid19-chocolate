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

    // 区市町村ごとの陽性者数
    const AgeTable = {
      headers: [],
      datasets: [],
    }

    // ヘッダーを設定
    if (this.$i18n.locale === 'ja') {
      AgeTable.headers = [
        { text: this.$t('地域'), value: 'area' },
        { text: this.$t('ふりがな'), value: 'ruby' },
        { text: this.$t('区'), value: 'label' },
        { text: this.$t('陽性者数'), value: 'count', align: 'end' },
      ]
    } else {
      municipalitiesTable.headers = [
        { text: this.$t('地域'), value: 'area' },
        { text: this.$t('区'), value: 'label' },
        { text: this.$t('陽性者数'), value: 'count', align: 'end' },
      ]
    }

    // データをソート
    const areaOrder = ['相模原市', null]
    datasets.data
      .sort((a, b) => {
        // 全体をふりがなでソート
        if (a.ruby === b.ruby) {
          return 0
        } else if (a.ruby > b.ruby) {
          return 1
        } else {
          return -1
        }
      })
      .sort((a, b) => {
        // '特別区' -> '多摩地域' -> '島しょ地域' -> その他 の順にソート
        return areaOrder.indexOf(a.area) - areaOrder.indexOf(b.area)
      })

    // データを追加
    municipalitiesTable.datasets = datasets.data
      .filter((d) => d.label !== '小計')
      .map((d) => {
        const area = this.$t(d.area)
        const label = this.$t(d.label)
        const count = countFormatter(d.count)

        if (this.$i18n.locale === 'ja') {
          const ruby = this.$t(d.ruby)
          return { area, ruby, label, count }
        } else {
          return { area, label, count }
        }
      })

    const info = {
      sText: this.$t('{date}の累計', {
        date: this.$d(new Date(datasets.date), 'date'),
      }),
    }

    return {
      date: formattedDate,
      municipalitiesTable,
      info,
    }
  },
}
</script>

