<template>

  <div class="row row-cols-1 row-cols-md-3 g-4">
    <SingleCategory v-for="category in categories" :key="category.idCategory" :category="category "/>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import category from "@/store/modules/category";
import SingleCategory from "@/components/category/SingleCategory";

export default {
  name: "Category",
  components: {SingleCategory},
  // computed: mapGetters(['categories']),
  computed: {
    ...mapGetters(['categories'])
  },
  methods: {
    ...mapActions(['fetchCategories'])
  },
  mounted() {
    this.fetchCategories()
  }
}
</script>

<style scoped>

</style>