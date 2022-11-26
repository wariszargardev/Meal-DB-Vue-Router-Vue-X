<template>
  <div class="col">
    <div class="card">
      <router-link :to="{name: 'CategoryDetails', params:{id: category.idCategory} }" >
        <img :src="category.strCategoryThumb" class="card-img-top"/>
      </router-link>

      <div class="card-body">
        <h5 class="card-title">
          {{ category.strCategory }}
        </h5>
        <router-link :to="{name: 'CategoryDetails', params:{id: category.idCategory} }" class="btn btn-outline-info">Detail</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleCategory",
  props: ['category']
}
</script>

<style scoped>

</style>