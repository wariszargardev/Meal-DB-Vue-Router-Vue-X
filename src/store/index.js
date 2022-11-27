import { createStore } from 'vuex'
import category from "@/store/modules/category";
import filterMeal from "@/store/modules/filterMeal";
import filterLetterMeals from "@/store/modules/filterLetterMeals";

export default createStore({
    modules:{
        category,
        filterMeal,
        filterLetterMeals
    }
})
