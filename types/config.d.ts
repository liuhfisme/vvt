export type LocaleType = 'zh_CN' | 'en'

export interface LocaleSetting {
    showPicker: boolean
    locale: LocaleType
    fallback: LocaleType
    availableLocales: LocaleType[]
}