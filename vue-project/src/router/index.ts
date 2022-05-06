import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from "@/views/RegisterView.vue";
import Login from "@/views/Login2.vue";
import MainFeed from "@/views/MainFeedView.vue";
import CreatePost from "@/views/CreatePostView.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // @ts-ignore
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login2',
      component: Login
    },
    {
      path: '/feed',
      name: 'Feed',
      component: MainFeed
    },
    {
      path: '/newPost',
      name: 'NewPost',
      component: CreatePost
    }
  ]
})

export default router
