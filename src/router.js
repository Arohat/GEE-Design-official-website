import Vue from 'vue'
import Router from 'vue-router'
import Article from './views/Article.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/article',
      component: Article
    },
    {
      path: '/article',
      name: 'article',
      component: Article
    },
    {
      path: '/brand',
      name: 'brand',
      component: () => import('./views/Brand.vue')
    },
    {
      path: '/make',
      name: 'make',
      component: () => import('./views/Make.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('./views/Product.vue')
    },
    {
      path: '/interface',
      name: 'interface',
      component: () => import('./views/Interface.vue')
    },

    {
      path: '/download',
      name: 'download',
      component: () => import('./views/Download.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/article/2019-05-23',
      component: () => import('./article/2019-05-23/2019-05-23.vue'),
      props: true
    },
    {
      path: '/article/2019-02-16',
      component: () => import('./article/2019-02-16/2019-02-16.vue'),
      props: true
    },
    {
      path: '/article/2019-07-18',
      component: () => import('./article/2019-07-18/2019-07-18.vue'),
      props: true
    },
    {
      path: '/article/2020-03-25',
      component: () => import('./article/2020-03-25/2020-03-25.vue'),
      props: true
    }
  ]
})
