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
                            name:'xiangqing',
                            path:'detail/',

                            //第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件
                            // props:{a:900},

                            //第二种写法：props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给Detail组件
                            // props:true,

                            //第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传给
                            props($route){
                                // console.log($route)
                                return{
                                    id:$route.query.id,
                                    title:$route.query.title,
                                }
                            },

                            component:Detail,
                        }
                    ]
                },
            ]
        },
        {
            name:'guanyu',
            path:'/about',
            component:About,
        }
    ]
})

