import {createStore} from "vuex";
import languageSearcher from "@store/modules/languageSearcher";
import translations from "@store/modules/translations";
import editTranslation from "@store/modules/editTranslation";
import deletedTranslations from '@store/modules/deletedTranslations'
import config from '@store/modules/config'

export default createStore ({
    modules: {
        languageSearcher,
        translations,
        editTranslation,
        deletedTranslations,
        config
    }
})
