<template>
  <v-col cols="12" md="6" class="DataCard MonitoringItemsOverviewCard">
    <client-only>
      <data-view
        :title="
          $t('モニタリング状況（{data}時点）', {
            data: monitoringItemsData.updatedate,
          })
        "
        title-id="monitoring-items-overview"
        :date="monitoringItemsData.date"
      >
        <template #description>
          <p>
            {{
              $t(
                '参考値における [ ] 内の数値は、ステージ4の指標である（ [ ] のついていない数値は、ステージ3の指標である）'
              )
            }}<br />
            {{
              $t(
                '[ ] の書かれていない参考値は、ステージ3,4どちらとも同じ数値であることを示す'
              )
            }}
          </p>
        </template>
        <template #additionalDescription>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{
                $t(
                  '参考値は、国の新型コロナウィルス感染症対策分科会で示された「今後想定される感染状況と対策について」のステージ1から4までのうち、ステージ3及び4の指標を掲載している'
                )
              }}
            </li>
            <li>
              {{
                $t(
                  '陽性患者については、報道発表した数値を翌日の数値に反映している'
                )
              }}
            </li>
            <li>
              {{ $t('速報値として公表するものであり、後日修正する場合がある') }}
            </li>
            <details>
              <summary>
                {{ $t(' 計算方法（ここをクリックして詳細を確認出来ます）') }}
              </summary>
              <div class="fade">
                <li>
                  {{
                    $t(
                      '（１）の数値は、｛直近1週間の累積新規陽性患者数/（本市人口/10万人）｝で計算'
                    )
                  }}
                </li>
                <li>
                  {{
                    $t(
                      '（２）の数値は、｛当該週の新規陽性患者数/前週の新規陽性患者数｝で計算'
                    )
                  }}
                </li>
                <li>
                  {{
                    $t(
                      '（３）の数値は、｛直近1週間の感染経路不明者/直近1週間の新規陽性患者数｝で計算'
                    )
                  }}
                </li>
                <li>
                  {{
                    $t(
                      '（４）の数値は、｛直近1週間の新規陽性患者数/市衛生研究所と民間検査機関の検査人数の合計｝で計算'
                    )
                  }}
                </li>
                <li>
                  {{
                    $t(
                      '（５）、（６）の数値は、｛入院者病床/利用可能病床｝である'
                    )
                  }}
                </li>
                <li>
                  {{
                    $t('（７）の数値は、｛療養者数/（本市人口/10万人）｝である')
                  }}
                </li>
              </div>
            </details>
          </ul>
        </template>
        <section>
          <h4>{{ $t('感染状況') }}</h4>
          <infection-status
            :aria-label="$t('感染状況')"
            :items="monitoringItems"
          />
        </section>
        <section>
          <h4>{{ $t('医療提供体制') }}</h4>
          <medical-system
            :aria-label="$t('医療提供体制')"
            :items="monitoringItems"
          />
        </section>
      </data-view>
    </client-only>
  </v-col>
</template>

<script>
import dayjs from 'dayjs'

import DataView from '@/components/index/_shared/DataView.vue'
import InfectionStatus from '@/components/index/CardsMonitoring/MonitoringItemsOverview/Table/InfectionStatus.vue'
import MedicalSystem from '@/components/index/CardsMonitoring/MonitoringItemsOverview/Table/MedicalSystem.vue'
import monitoringItemsData from '@/data/monitoring_items.json'
import { formatMonitoringItems } from '@/utils/formatMonitoringItems'

export default {
  components: {
    DataView,
    InfectionStatus,
    MedicalSystem,
  },
  data() {
    const monitoringItems = formatMonitoringItems(monitoringItemsData.data)
    return {
      monitoringItemsData,
      monitoringItems,
      date: dayjs(monitoringItemsData.date).format('YYYY年MM月DD日'),
    }
  },
}
</script>

<style lang="scss" module>
section {
  margin: 0 0 20px;

  /* h タグが連続するため DataView-Content の margin を少し打ち消す */
  &:first-child {
    margin-top: -10px;
  }

  h4 {
    margin: 5px 0 10px;
    font-weight: normal;
    @include font-size(16);
  }
}

.button {
  color: $green-1 !important;
  &:hover {
    color: $white !important;
  }

  @include button-text('sm');
}

dfn {
  font-style: normal;
  font-weight: 600;
}

details[open] .fade {
  animation: fadeIn 0.7s ease;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}

details[open] summary {
  color: gray;
}
</style>
