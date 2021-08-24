<template>
  <div class="Worker">
    <page-header :title="$t('企業の皆様・はたらく皆様へ')" />
    <static-card>
      <h3>
        <app-link
          to="https://www.city.sagamihara.kanagawa.jp/sangyo/sangyo/1019826/index.html"
          :icon-size="24"
          >{{ $t('相模原市 新型コロナウイルス感染症 事業者支援情報') }}
        </app-link>
      </h3>
      <p>
        {{
          $t(
            '相模原市及び国の新型コロナウイルス感染症に関する支援策の情報をまとめています。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <app-link
          to="https://www.city.sagamihara.kanagawa.jp/shisei/seisaku/1022660.html"
          :icon-size="24"
          >{{ $t('新型コロナウイルス感染症「暮らし・経済支援対策」') }}
        </app-link>
      </h3>
      <p>
        {{
          $t(
            '本市では、新型コロナウイルス感染症の感染拡大防止対策を推進し、市民の皆様の命と暮らしを守るため、その時々の状況に合わせて必要な対策を講じています。対策の実施に当たっては、国や県の補助金等のほか、「新型コロナウイルス感染症対応地方創生臨時交付金」を活用しながら、本市の状況に合わせた市独自の対策を行っています。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <app-link to="https://cbc.city.sagamihara.kanagawa.jp/" :icon-size="24"
          >{{
            $t(
              '「あらっいいお店♪感謝(サンキュー)を込めて！さがみはら・みんなのキャッシュバックキャンペーン（通称：サンキューキャンペーン）」'
            )
          }}
        </app-link>
      </h3>
      <p>
        {{
          $t(
            '新型コロナウイルス感染症拡大防止のため営業を自粛した市内事業者の皆さんや、外出を控えた市民の皆さんへの感謝と、経済の活性化に向け、市内の参加店舗等で期間中に合計10,000円以上（複数店舗等合算も可）の購入などをした市民の皆さんを対象に2,000円をキャッシュバック（還元）するキャンペーンを実施します。'
          )
        }}
      </p>
      <br />
      <p>
        {{
          $t(
            'キャンペーンの実施期間：令和3年9月1日（水曜日）から9月30日（木曜日）まで'
          )
        }}
      </p>
      <br />
      <p>
        {{
          $t(
            'キャンペーンの実施にあたって参加事業者の申込を6月15日から開始します。詳細については、キャンペーン特設サイトをご覧ください。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <app-link
          to="https://www.meti.go.jp/covid-19/getsuji_shien/index.html"
          :icon-size="24"
          >{{ $t('月次支援金') }}
        </app-link>
      </h3>
      <p>
        {{
          $t(
            '緊急事態措置又はまん延防止等重点措置に伴う飲食店時短営業等又は外出自粛等の影響を受けて月間売上が2019年比又は2020年比の同じ月に比べて50％以上減少した中小法人・個人事業者に対する支援金'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <app-link
          to="https://www.pref.kanagawa.jp/docs/jf2/coronavirus/kyoryokukin_8th.html"
          :icon-size="24"
          >{{
            $t(
              '新型コロナウイルス感染症拡大防止協力金（第8弾）（時短営業要請期間：令和3年4月1日から4月19日まで）'
            )
          }}
        </app-link>
      </h3>
      <p>
        {{
          $t(
            '県の要請に応じて、夜間営業時間の短縮にご協力いただいた事業者に対する協力金（時短営業要請期間：令和3年4月1日から4月19日まで）'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <app-link
          to="https://www.pref.kanagawa.jp/docs/jf2/coronavirus/kyoryokukin_9th.html"
          :icon-size="24"
          >{{
            $t(
              '新型コロナウイルス感染症拡大防止協力金（第9弾）（時短営業要請期間：令和3年4月20日から5月11日まで）'
            )
          }}
        </app-link>
      </h3>
      <p>
        {{
          $t(
            '県の要請に応じて、夜間営業時間の短縮にご協力いただいた事業者に対する協力金（時短営業要請期間：令和3年4月20日から5月11日まで）'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <app-link
          to="https://www.pref.kanagawa.jp/docs/jf2/coronavirus/kyoryokukin_10th.html"
          :icon-size="24"
          >{{
            $t(
              '新型コロナウイルス感染症拡大防止協力金（第10弾）（時短営業要請期間：令和3年5月12日から5月31日まで）'
            )
          }}
        </app-link>
      </h3>
      <p>
        {{
          $t(
            '県の要請に応じて、夜間営業時間の短縮にご協力いただいた事業者に対する協力金（時短営業要請期間：令和3年5月12日から5月31日まで）'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <app-link
          to="https://www.pref.kanagawa.jp/docs/jf2/coronavirus/kyoryokukin_11th.html"
          :icon-size="24"
          >{{
            $t(
              '新型コロナウイルス感染症拡大防止協力金（第11弾）（時短営業要請期間：令和3年6月1日から6月20日まで）'
            )
          }}
        </app-link>
      </h3>
      <p>
        {{
          $t(
            '県の要請に応じて、夜間営業時間の短縮にご協力いただいた事業者に対する協力金（時短営業要請期間：令和3年6月1日から6月20日まで）'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <app-link to="https://70cp.pref.kanagawa.jp/" :icon-size="24"
          >{{ $t('かながわPayキャンペーン') }}
        </app-link>
      </h3>
      <p>
        {{
          $t(
            'かながわPayアプリを通じてQRコード決済をした場合、利用者に最大20％のポイントが還元されるキャンペーン ※事前に加盟店登録が必要（加盟店登録期限：令和3年7月31日）'
          )
        }}
      </p>
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
  middleware: 'redirect',
  head(): MetaInfo {
    return {
      title: this.$t('企業の皆様・はたらく皆様へ') as string,
    }
  },
})
</script>
