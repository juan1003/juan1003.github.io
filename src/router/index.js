import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "*",
      redirect: '/'
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
