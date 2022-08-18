
import Vue from "vue"
import App from './App.vue'


import {Row, Button, TableColumn,Table} from 'element-ui';

Vue.config.productionTip = false

Vue.use(Button,TableColumn,Table)
Vue.use(Row)



new Vue({
    el:'#app',
    render:h => h(App)
})