<template>
  <router-link :to="{name: 'MealsByLetter' , params: {letter: letter}}" v-for="letter of letters" :key="letter"  class="btn btn-outline-info m-1"> {{ letter }}</router-link>
  <div class="row row-cols-1 row-cols-md-3 g-4 mt-2">
    <SingleMeal v-for="meal in allLettersMeals" :meal="meal" :key="meal.idMeal" />
  </div>

  <div v-if="!allLettersMeals.length">
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>Sorry!</strong> No meal available
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";
import SingleMeal from "@/components/filterMeals/SingleMeal";

export default {
  name: "MealsByLetter",
  components: {SingleMeal},
  props: ['letter'],

  data() {
    return {
      letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    }
  },
  computed:{
    ...mapGetters(['allLettersMeals'])
  },
  methods:{
    ...mapActions(['fetchLetterMeals'])
  },
  mounted() {
    if(this.letter){
      this.fetchLetterMeals(this.letter)
    }
  },
  watch: {
    letter: {
      handler: function (val, oldVal) {
        this.fetchLetterMeals(val)
      }
    }
  }
}
</script>

<style scoped>

</style>