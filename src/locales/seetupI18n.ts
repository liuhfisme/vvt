import { App } from 'Vue';
import { LOCALE } from './../setttings/localeSetting';
import { createI18n, I18n, I18nOptions } from 'vue-i18n'
import { localeSetting } from '../setttings/localeSetting'
import { setHtmlPageLang, setLoadLocalePool, loadLocalePool } from './helper';
import { storeI18n } from '../store/modules/locale'

const { fallback, availableLocales } = localeSetting

export let i18n: ReturnType<typeof createI18n>

async function createI18nOptions(): Promise<I18nOptions> {
    // const localeStore = TODO 从store中获取locale
    const locale = Math.floor((Math.random()*10)+1) % 2 === 1 ? LOCALE.ZH_CH : LOCALE.EN_US
    // const locale = 'en'
    console.log('locale>>> ', locale)
    const defaultLocal = await import(`./lang/${locale}.ts`)
    const message = defaultLocal.default?.message ?? {}
    setHtmlPageLang(locale)
    setLoadLocalePool((loadLocalePool) => {
        loadLocalePool.push(locale)
    })

    return {
        legacy: false,
        locale,
        fallbackLocale: fallback,
        messages: {
            [locale]: message
        },
        availableLocales: availableLocales,
        sync: true,
        silentTranslationWarn: true,
        missingWarn: false,
        silentFallbackWarn: true
    }
}

export async function setupI18n(app: App) {
    const options = await createI18nOptions();
    i18n = createI18n(options) as I18n
    app.use(i18n)
}