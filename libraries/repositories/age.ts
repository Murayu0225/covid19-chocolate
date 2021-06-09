// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/age.json'
import {
  Convert,
  Age,
} from '@/libraries/auto_generated/data_converter/convertAge'
import {
  BaseRepository,
  IBaseRepository,
} from '@/libraries/repositories/BaseRepository'

export interface IAgeRepository
  extends IBaseRepository<Age> {}

export class AgeRepository
  extends BaseRepository<Age>
  implements IAgeRepository
{
  /**
   * 使用箇所
   *
   * モニタリング項目(1) 新規陽性者数 (components/cards/MonitoringConfirmedCasesNumberCard.vue)
   *
   * モニタリング項目(3) 新規陽性者における接触歴等不明者数／増加比 (components/cards/UntrackedRateCard.vue)
   */
  constructor() {
    super(Convert.toAge(JSON.stringify(rawData)))
  }
}
