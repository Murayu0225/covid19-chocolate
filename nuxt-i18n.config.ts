import { NuxtAppOptions, NuxtConfig } from '@nuxt/types'

const dateTimeFormatsCommon = {
  dateTime: {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  },
  date: {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  },
  dateWithoutYear: {
    month: 'long',
    day: 'numeric',
  },
  dateWithoutDay: {
    year: 'numeric',
    month: 'long',
  },
  dateWithDayOfWeek: {
    weekday: 'short',
    month: 'long',
    day: 'numeric',
  },
}

const options: NuxtConfig = {
  strategy: 'prefix_except_default',
  detectBrowserLanguage: false,
  defaultLocale: 'ja',

  vueI18n: {
    fallbackLocale: 'ja',
    formatFallbackMessages: true,
    dateTimeFormats: {
      ja: dateTimeFormatsCommon,
      en: dateTimeFormatsCommon,
      'zh-cn': dateTimeFormatsCommon,
      'zh-tw': dateTimeFormatsCommon,
      ko: dateTimeFormatsCommon,
    },
  },
  // vueI18nLoader: true,
  lazy: true,
  langDir: 'assets/locales/',
  locales: [
    {
      code: 'ja',
      name: '日本語',
      iso: 'ja-JP',
      file: 'ja.json',
      description: 'Japanese',
    },
    {
      code: 'en',
      name: 'English',
      iso: 'en-US',
      file: 'en.json',
      description: 'English',
    },
    {
      code: 'zh-cn',
      name: '简体中文',
      iso: 'zh-CN',
      file: 'zh_CN.json',
      description: 'Simplified Chinese',
    },
    {
      code: 'zh-tw',
      name: '繁體中文',
      iso: 'zh-TW',
      file: 'zh_TW.json',
      description: 'Traditional Chinese',
    },
    {
      code: 'ko',
      name: '한국어',
      iso: 'ko-KR',
      file: 'ko.json',
      description: 'Korean',
    },
  ],
  seo: false,
}

export default options as NuxtAppOptions
