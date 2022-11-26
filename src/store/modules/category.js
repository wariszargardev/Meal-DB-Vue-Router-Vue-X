import axiosClient from "@/axios/axiosClient";

const state= {
    loading: false,
    categories: [],
    error: ''
}

const getters= {
    categories: (state) =>{
        return state.categories
    },

    categoryDetails: (state) =>{
        return (categoryId) => {
            return state.categories.find((value,index)=>{
                return value.idCategory == categoryId
            })
        }
    },

}

const actions= {
    fetchCategories({commit}){
        axiosClient.get('categories.php').then((data)=>{
            commit('setCategories', data.data.categories)
        })
    }
}

const mutations= {
    setCategories: (state, data)=>{
        state.categories= data
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}