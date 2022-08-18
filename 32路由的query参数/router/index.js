import VueRouter from "vue-router";
import Home from '../pages/Home'
import About from '../pages/About'
import New from '../pages/New'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'new',
                    component:New,
                },
                {
                    path:'message',
                    component:Message,
                    children:[
                        {
                            path:'detail',
                            component:Detail,
                        }
                    ]
                },
            ]
        },
        {
            path:'/about',
            component:About,
        }
    ]
})

