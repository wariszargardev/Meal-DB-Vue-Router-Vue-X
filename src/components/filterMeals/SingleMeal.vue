<template>
  <div class="col">
    <div class="card">
      <router-link :to="{name: 'MealDetails', params: {id: meal.idMeal} }" >
        <img :src="meal.strMealThumb" class="card-img-top" :alt="meal.strMeal">
      </router-link>
      <div class="card-body">
        <h4 class="card-title">{{ meal.strMeal }}</h4>
        <p class="card-text">
          {{ meal.strInstructions }}
        </p>
        <a :href="meal.strYoutube" target="_blank" class="btn btn-outline-primary float-start">Youtube</a>
        <router-link :to="{name: 'MealDetails', params: {id: meal.idMeal} }" class="btn btn-outline-success float-end">View Details</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleMeal",
  props: ['meal']
}
</script>

<style scoped>
img {
  height: 280px;
}
.card{
  max-height: 700px;
  overflow: hidden;
}
.card-text{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* number of lines to show */
  line-clamp: 4;
  -webkit-box-orient: vertical;
}
</style>