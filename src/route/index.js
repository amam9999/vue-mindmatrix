import { createRouter, createWebHistory } from "vue-router";
import Index from "@/components/index.vue";
import Home from "@/components/home.vue";
import FlashCard from "@/components/flashcard.vue";
import Quiz from "@/components/quiz.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
    children: [
      {
        path: "home",
        component: Home,
      },
      {
        path: "flashcard",
        component: FlashCard,
      },
      {
        path: "quiz",
        component: Quiz,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ y: 0 }), //切换路由时回滚到顶部
  routes,
});

export default router;
