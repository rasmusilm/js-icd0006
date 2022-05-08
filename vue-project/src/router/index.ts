import { createRouter, createWebHistory } from 'vue-router';
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
