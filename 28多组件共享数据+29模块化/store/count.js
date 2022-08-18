
export default {
    namespaced:true,
    actions:{
        incrementOdd(context,value){
            if(context.state.sum&1) 
            context.commit('incrementOdd',value)
        },
        incrementWait(context,value){
            setTimeout(()=>{
                context.commit('incrementWait',value)
            },500)
        },
    },
    mutations:{
        INCREMENT(state, value){
            // console.log(state,value)
            state.sum += value
        },
        DECREMENT(state, value){
            // console.log(state,value)
            state.sum -= value
        },
        
        incrementOdd(state,value){
            state.sum += value
        },
        incrementWait(state,value){
            state.sum += value
        },
    },
    state:{
        sum:0,
        school:'NCWU',
        subject:'计算机科学与技术',
    },
    getters:{
        bigSum(state){
            return state.sum * 10
        }
    },
}
