import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../pages/Welcome.vue'
import CountriesList from '../pages/CountriesList.vue'
import CountryDetail from '../pages/CountryDetail.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Welcome },
    { path: '/countries', component: CountriesList },
    { path: '/country/:code', component: CountryDetail }
  ]
})

export default router
