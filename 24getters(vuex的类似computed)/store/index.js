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
    increment(state, value){
        // console.log(state,value)
        state.sum += value
    },
    decrement(state, value){
        // console.log(state,value)
        state.sum -= value
    },
    incrementOdd(state, value){
        // console.log(state,value)
        
        state.sum += value
    },
    incrementWait(state, value){
        // console.log(state,value)
            state.sum += value
    },
}

const state = {
    sum:0,
}

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