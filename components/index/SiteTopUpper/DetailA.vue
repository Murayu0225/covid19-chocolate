<template>
  <div class="InfectionMedicalCareProvisionStatus">
    <div class="InfectionMedicalCareProvisionStatus-heading">
      <h3 class="InfectionMedicalCareProvisionStatus-title">
        {{
          $t('本日の感染状況 {date}時点', {
            date: formatDate(date),
          })
        }}
      </h3>
    </div>
    <div class="InfectionMedicalCareProvisionStatus-Box">
      <div class="InfectionMedicalCareProvisionStatus-Headline">
        <app-link
          to="https://www.city.sagamihara.kanagawa.jp/shisei/koho/1019191.html"
        >
          {{ $t('感染状況') }}
        </app-link>
      </div>
      <i18n
        tag="p"
        class="InfectionMedicalCareProvisionStatus-description"
        path="新規陽性者{newPositiveCases}人（濃厚接触者・接触者{n}人、海外渡航歴あり{k}人、不明{f}人、調査中{t}人）、死亡者数{d}人"
      >
        <template #newPositiveCases>
          <span>
            {{ statuses['新規陽性者'].toLocaleString() }}
          </span>
        </template>
        <template #n>
          <span>
            {{ statuses['濃厚接触者・接触者'].toLocaleString() }}
          </span>
        </template>
        <template #k>
          <span>
            {{ statuses['海外渡航歴あり'].toLocaleString() }}
          </span>
        </template>
        <template #f>
          <span>
            {{ statuses['不明'].toLocaleString() }}
          </span>
        </template>
        <template #t>
          <span>
            {{ statuses['調査中'].toLocaleString() }}
          </span>
        </template>
        <template #d>
          <span>
            {{ statuses['死亡者数'].toLocaleString() }}
          </span>
        </template>
      </i18n>
    </div>
    <div class="InfectionMedicalCareProvisionStatus-Box">
      <div class="InfectionMedicalCareProvisionStatus-Headline">
        <app-link
          to="https://www.city.sagamihara.kanagawa.jp/shisei/koho/1019191.html"
        >
          {{ $t('症状') }}
        </app-link>
      </div>
      <i18n
        tag="p"
        class="InfectionMedicalCareProvisionStatus-description"
        path="無症状{mp}人、軽症{kp}人、中等症{tk}人、重症{jk}人"
      >
        <template #mp>
          <span>
            {{ statuses['無症状'].toLocaleString() }}
          </span>
        </template>
        <template #kp>
          <span>
            {{ statuses['軽症'].toLocaleString() }}
          </span>
        </template>
        <template #tk>
          <span>
            {{ statuses['中症'].toLocaleString() }}
          </span>
        </template>
        <template #jk>
          <span>
            {{ statuses['重症'].toLocaleString() }}
          </span>
        </template>
      </i18n>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import AppLink from '@/components/_shared/AppLink.vue'
import {
  Data as IInfectionMedicalCareProvisionStatusData,
  InfectionMedicalcareprovisionStatus as IInfectionMedicalCareProvisionStatus,
} from '@/libraries/auto_generated/data_converter/convertInfectionMedicalcareprovisionStatus'

type Data = {}
type Methods = {
  formatDate(date: Date): string
}
type Computed = {
  statuses: IInfectionMedicalCareProvisionStatusData
  date: Date
  infectionMedicalCareProvisionStatus: IInfectionMedicalCareProvisionStatus
}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    AppLink,
  },
  computed: {
    statuses() {
      return this.infectionMedicalCareProvisionStatus.data
    },
    date() {
      return new Date(this.infectionMedicalCareProvisionStatus.todaydate)
    },
    infectionMedicalCareProvisionStatus() {
      return this.$store.state.infectionMedicalCareProvisionStatus
    },
  },
  methods: {
    formatDate(date) {
      return this.$d(date, 'date') as string
    },
  },
})
</script>

<style scoped lang="scss">
.InfectionMedicalCareProvisionStatus {
  @include card-container();

  padding: 8px 18px;
  margin-bottom: 10px;

  .InfectionMedicalCareProvisionStatus-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .InfectionMedicalCareProvisionStatus-title {
      display: flex;
      align-items: center;
      padding: 0 0 4px 0;
      color: $gray-2;

      @include card-h2();
      @include font-size(14);
    }
  }

  .InfectionMedicalCareProvisionStatus-Box {
    overflow: hidden;

    .InfectionMedicalCareProvisionStatus-Headline {
      float: left;
      text-align: center;
      width: 10em;
      border: 1px solid;
      border-color: #000;
      margin: 0 4px 1px 0;
      color: $gray-3;

      @include font-size(12);
    }

    .InfectionMedicalCareProvisionStatus-description {
      @include font-size(12);

      padding: 3px 0 0 0;
      margin: 0;

      > span {
        color: $green-1;
      }

      > a {
        @include text-link();

        text-decoration: none;
      }
    }
  }
}
</style>
