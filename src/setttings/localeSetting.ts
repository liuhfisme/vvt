import type { LocaleSetting, LocaleType } from '../../types/config'

export const LOCALE: { [key: string]: LocaleType } = {
    ZH_CH: 'zh_CN',
    EN_US: 'en'
}

export const localeSetting: LocaleSetting = {
    showPicker: true,
    locale: LOCALE.ZH_CN,
    fallback: LOCALE.ZH_CN,
    availableLocales: [LOCALE.ZH_CN, LOCALE.EN_US]
}