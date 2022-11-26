<template>
  <div style="display: flex">
    <input v-model="filterText" class="form-control form-control-lg" type="text" placeholder="Search for meals" aria-label=".form-control-lg example">
    <button class="btn btn-outline-info" @click="searchMeals">Search</button>
  </div>

  <div class="row row-cols-1 row-cols-md-3 g-4 mt-2">
    <SingleMeal v-for="meal in allMeals" :meal="meal" :key="meal.idMeal" />
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import SingleMeal from "@/components/filterMeals/SingleMeal";

export default {
  name: "MealSearch",
  props: ["filterText"],
  components: {SingleMeal},
  computed: {
    ...mapGetters(['allMeals'])
  },
  data(){
    return{
      filterText: "Salmon"
    }
  },

  methods:{
    ...mapActions(['fetchMeals']),
    searchMeals(){
      this.fetchMeals(this.filterText)
    }
  },

  mounted() {
    if(this.filterText){
      this.searchMeals()
    }
  }
}
</script>

<style scoped>
img{
  height: 400px;
}
</style>