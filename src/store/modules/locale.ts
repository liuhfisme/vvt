import { LOCALE } from './../../setttings/localeSetting';
import { reactive } from "vue";
import { createStore } from 'vuex'
import { setHtmlPageLang } from '../../locales/helper';

export const storeI18n = createStore({
    state() {
        return {
            locale: LOCALE.ZH_CH
        }
    },
})