import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from "@/components/Layout/DefaultLayout";
import Home from "@/views/Home";
import Category from "@/views/Category";
import MealSearch from "@/views/MealSearch";
import MealsByLetter from "@/views/MealsByLetter";
import CategoryDetails from "@/components/category/CategoryDetails";
import MealDetails from "@/components/filterMeals/MealDetails";

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children:[
      {
        path: '/',
        name: "Home",
        component: Category,
      },
      {
        path: '/category',
        name: "Category",
        component: Category,
      },
      {
        path: '/category/:id',
        name: "CategoryDetails",
        component: CategoryDetails,
        props: true
      },
      {
        path: '/meal-details/:id?',
        name: "MealDetails",
        component: MealDetails,
        props: true
      },
      {
        path: '/meal-filter/:filterText?',
        name: "MealSearch",
        component: MealSearch,
        props: true
      },
      {
        path: '/meals-by-letter/:letter?',
        name: "MealsByLetter",
        component: MealsByLetter,
        props: true
      },

    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
