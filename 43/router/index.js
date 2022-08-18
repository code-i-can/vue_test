import VueRouter from "vue-router";
import Home from '../pages/Home'
import About from '../pages/About'
import New from '../pages/New'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
const router = new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home,
            meta:{title:'主页'},
            children:[
                {
                    path:'new',
                    component:New,
                    meta:{isAuth:true, title:'新闻'},
                    beforeEnter:(to,from,next)=>{
                        console.log('独享路由守卫',to,from)
                        if(to.meta.isAuth){
                            if(localStorage.getItem('school') === 'ncwu'){
                                next()
                            }else{
                                alert('不是ncwu没有访问权限')
                            }
                        }else{
                            next()
                        }
                    }
                },
                {
                    path:'message',
                    component:Message,
                    meta:{isAuth:true, title:'消息'},
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail/',
                            meta:{title:'详情'},
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
            meta:{title:'关于', isAuth:true},
        }
    ]
})
//全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
// router.beforeEach((to,from,next)=>{
//     console.log('前置路由守卫',to,from)
//         if(to.meta.isAuth){
//             if(localStorage.getItem('school') === 'ncwu'){
//                 next()
//             }else{
//                 alert('不是ncwu没有访问权限')
//             }
//         }else{
//             next()
//         }
        
// }),

router.afterEach((to, from)=>{
    console.log('后置路由守卫', to, from)
    document.title = to.meta.title || 'NCWU系统' 
})



export default router

