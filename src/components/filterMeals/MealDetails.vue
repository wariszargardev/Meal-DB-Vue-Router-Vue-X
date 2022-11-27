<template>
  <h5>
    <b>Meal ID:</b> {{ $route.params.id }}
    <YoutubeButton :href="mealDetails.strYoutube">Youtube</YoutubeButton>
  </h5>

  <div class="mt-3" v-if="mealDetails && mealDetails.idMeal">
    <div class="card mb-3">
      <div class="row g-0" style="max-height: 350px">
        <div class="col-md-6">
          <img :src="mealDetails.strMealThumb" class="img-fluid rounded-start"
               :alt="mealDetails.strMeal">
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h5 class="card-title">{{ mealDetails.strMeal }}</h5>
            <p class="card-text">
              {{ mealDetails.strInstructions }}
            </p>

            <p><b>Tags</b></p>
            <button type="button" class="btn btn-outline-success mr-1" v-for="tag in mealDetails.strTags.split(',')"
                    :key="tag">{{ tag }}
            </button>

          </div>

        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <div class="shadow-lg p-3 mb-5 bg-body rounded">
          <b>Category: </b> {{mealDetails.strCategory}}
        </div>

      </div>
      <div class="col-6">
        <div class="shadow-lg p-3 mb-5 bg-body rounded">
          <b>Area: </b> {{mealDetails.strArea}}
        </div>

      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <ul class="list-group">
          <li class="list-group-item"><b>Ingredient</b></li>
          <template v-for="(el, index) of new Array(20)">
          <li class="list-group-item" v-if="mealDetails[`strIngredient${index+1}`]">
            {{ mealDetails[`strIngredient${index+1}`] }}
          </li>
          </template>
        </ul>
      </div>
      <div class="col-6">
        <ul class="list-group">
          <li class="list-group-item"><b>Measure</b></li>
          <template v-for="(el, index) of new Array(20)">
            <li class="list-group-item" v-if="mealDetails[`strMeasure${index+1}`]">
              {{ mealDetails[`strMeasure${index+1}`] }}
            </li>
          </template>
        </ul>

      </div>
    </div>


  </div>
  <div v-else>
    <div class="d-flex justify-content-center mt-5">
      <div class="spinner-border" style="width: 30rem; height: 30rem;" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import YoutubeButton from "@/components/YoutubeButton";

export default {
  name: "MealDetails",
  components: {YoutubeButton},
  props: ['id'],
  computed: {
    ...mapGetters(['mealDetails'])
  },
  methods: {
    ...mapActions(['fetchMealDetails'])
  },
  mounted() {
    this.fetchMealDetails(this.id)
  }
}
</script>

<style scoped>
img {
  height: 350px;
  width: 100%;
}
.card-text{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6; /* number of lines to show */
  line-clamp: 6;
  -webkit-box-orient: vertical;
}
</style>