import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {
    
    incrementOdd(context,value){
        if(context.state.sum&1) 
        context.commit('incrementOdd',value)
    },
    incrementWait(context,value){
        setTimeout(()=>{
            context.commit('incrementWait',value)
        },500)
    },

}

const mutations = {
    INCREMENT(state, value){
        // console.log(state,value)
        state.sum += value
    },
    DECREMENT(state, value){
        // console.log(state,value)
        state.sum -= value
    },
}

const state = {
    sum:0,
    school:'NCWU',
    subject:'计算机科学与技术',
}
//准备getters——用于将state中的数据进行加工 类似computed
const getters = {
    bigSum(state){
        return state.sum * 10
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})