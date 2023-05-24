import  Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from './langs'

Vue.use(VueI18n)

const i18n  = new VueI18n({
    locale: localStorage.lang || 'kr',
    messages,
    silentTranslationWarn: true,
})

export default i18n
