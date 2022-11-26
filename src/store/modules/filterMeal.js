import axiosClient from "@/axios/axiosClient";

const state={
    loading: true,
    filterMeals: [],
    mealDetails: {}
}

const getters= {
    allMeals: (state) =>{
        return state.filterMeals
    },

    mealDetails: (state) =>{
        return state.mealDetails
    }
}

const actions= {
    fetchMeals({commit}, filterText){
        axiosClient.get(`search.php?s=${filterText}`).then((data)=>{
            commit('setFilterMeals', data.data.meals)
        })
    },

    fetchMealDetails({commit}, id){
        axiosClient.get(`lookup.php?i=${id}`).then((data) =>{
            commit('setMealDetails',data.data.meals[0])
        })
    }
}

const mutations= {
    setFilterMeals(state, data){
        state.filterMeals= data
    },

    setMealDetails(state, data){
        state.mealDetails= data
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}