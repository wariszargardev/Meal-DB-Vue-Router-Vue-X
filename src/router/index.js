import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from "@/components/Layout/DefaultLayout";
import Home from "@/views/Home";
import Category from "@/views/Category";
import MealSearch from "@/views/MealSearch";
import MealsByLetter from "@/views/MealsByLetter";
import MealsByIngredient from "@/views/MealsByIngredient";
import CategoryDetails from "@/components/category/CategoryDetails";

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children:[
      {
        path: '/',
        name: "Home",
        component: Home,
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
        path: '/meal-filter',
        name: "MealSearch",
        component: MealSearch,
      },
      {
        path: '/meals-by-letter',
        name: "MealsByLetter",
        component: MealsByLetter,
      },
      {
        path: '/meals-by-ingredient',
        name: "MealsByIngredient",
        component: MealsByIngredient,
      },
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
