<template>
  <!--  <p>Parameter  {{$route.params.id}} </p>-->
  <h3><b>Category ID:</b> {{ id }}</h3>
  <div class="align-items-center" v-if="categoryInfo">
    <div class="card " style="width: 40rem;">
      <img :src="categoryInfo.strCategoryThumb" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ categoryInfo.strCategory }}</h5>
        <p class="card-text">
          {{ categoryInfo.strCategoryDescription }}
        </p>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="alert alert-danger" role="alert">
      No record found.
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "CategoryDetails",
  props: ['id'],
  data() {
    return {
      categoryInfo: {}
    }
  },
  computed: {
    ...mapGetters(['categoryDetails']),
  },
  mounted() {
    this.categoryInfo = this.categoryDetails(this.id);
  }
}
</script>

<style scoped>
.card {
  margin: 0 auto;
  float: none;
  margin-bottom: 10px;

}
</style>