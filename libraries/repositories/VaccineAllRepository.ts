// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/vaccine_all.json'
import {
  Convert,
  Vaccination,
} from '@/libraries/auto_generated/data_converter/convertVaccineAll'
import {
  BaseRepository,
  IBaseRepository,
} from '@/libraries/repositories/BaseRepository'

export interface IVaccineAllRepository extends IBaseRepository<Vaccination> {}
export class VaccineAllRepository
  extends BaseRepository<Vaccination>
  implements IVaccineAllRepository
{
  /**
   * 使用箇所
   *
   * ワクチン接種回数（高齢者・累計） (components/index/CardsReference/Vaccination/Card.vue)
   */
  constructor() {
    super(Convert.toVaccination(JSON.stringify(rawData)))
  }
}
