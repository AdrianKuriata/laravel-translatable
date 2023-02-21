import {createStore} from "vuex";
import languageSelector from "@store/modules/languageSelector";
import languageSearcher from "@store/modules/languageSearcher";
import translations from "@store/modules/translations";
import scanner from "@store/modules/scanner";

export default createStore ({
    modules: {
        languageSelector,
        languageSearcher,
        translations,
        scanner
    }
})
