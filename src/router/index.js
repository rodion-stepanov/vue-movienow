import Vue from 'vue';
import Router from 'vue-router';
import Films from '../pages/Films';
import AboutFilm from '../pages/AboutFilm';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Films,
            props: true
        },
        {
            path: '/:filmID',
            component: AboutFilm,
            props: true,
        }
    ]
})