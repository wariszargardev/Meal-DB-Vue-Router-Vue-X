import { createStore } from 'vuex'
import category from "@/store/modules/category";
import filterMeal from "@/store/modules/filterMeal";

export default createStore({
    modules:{
        category,
        filterMeal
    }
})
