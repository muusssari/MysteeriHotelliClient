import Vue from 'vue';
import Router from 'vue-router';
import Content from './components/Content.vue';

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  mode: 'hash',
  routes: [
    { path: '/', component: Content },
    { path: '/conversion/:id', component: Content },
    { path: '/draft', component: Content },
  ],
});