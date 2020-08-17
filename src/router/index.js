import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Movie = () => import('../views/movie/Movie')
const Narrate = () => import('../views/narrate/Narrate')
const Special = () => import('../views/special/Special')
const Cartoon = () => import('../views/cartoon/Cartoon')
const Teleplay = () => import('../views/teleplay/Teleplay')
const Terrifying = () => import('../views/terrifying/Terrifying')
const Variety = () => import('../views/variety/Variety')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/movie',
    component: Movie
  },
  {
    path: '/cartoon',
    component: Cartoon
  },
  {
    path: '/narrate',
    component: Narrate
  },
  {
    path: '/special',
    component: Special
  },
  {
    path: '/teleplay',
    component: Teleplay
  },
  {
    path: '/terrifying',
    component: Terrifying
  },
  {
    path: '/variety',
    component: Variety
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router