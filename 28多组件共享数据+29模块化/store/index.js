import countOption from "./count";
import personOption from "./person";
import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)



export default new Vuex.Store({
    modules:{
        countAbout:countOption,
        personAbout:personOption,
    }
})