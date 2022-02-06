import Vue from 'vue'
import Router from 'vue-router'
import Page1 from '@/components/homepage'
import Page2 from '@/components/accordion-questions'
import Page3 from '@/components/Grid'
import Page4 from '@/components/Images'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: {
        name: "Page1"
      }
    },
    {
      path: '/page1',
      name: 'Page1',
      component: Page1
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2
    },
    {
      path: '/page3',
      name: 'Page3',
      component: Page3
    },
    {
      path: '/page4',
      name: 'Page4',
      component: Page4
    }
  ]
})