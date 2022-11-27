import axiosClient from "@/axios/axiosClient";

const state={
    loading: true,
    letterMeals: [],
}

const getters= {
    allLettersMeals: (state) =>{
        return state.letterMeals
    }
}

const actions= {
    fetchLetterMeals({commit}, letter){
        axiosClient.get(`search.php?f=${letter}`).then((data)=>{
            commit('setLetterMeals', data.data.meals)
        })
    },
}

const mutations= {
    setLetterMeals(state, data){
        state.letterMeals= data
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}