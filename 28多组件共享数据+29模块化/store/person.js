import axios from 'axios'
import {nanoid} from 'nanoid'
export default {
    namespaced:true,
    actions:{
        addPersonRen(context,name){
            if(name.indexOf('任') === 0){
                context.commit('ADD_PERSON',name)
            }else{
                alert('添加的人必须姓任')
            }
        },
        addPersonServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                resonse => {
                    context.commit('ADD_PERSON',resonse.data)
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations:{
        ADD_PERSON(state,value){
            state.personsObj.unshift({id:nanoid(),name:value})
        },
    },
    state:{
        personsObj:[{id:nanoid(),name:'张三'}],
    },
    getters:{
        firstPersonName(state){
            alert(state.personsObj[0].name)
        }
    },
}