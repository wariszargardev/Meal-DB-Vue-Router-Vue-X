<template>
  <header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <router-link :to="{name: 'Home'}" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
            <use xlink:href="#bootstrap"></use>
          </svg>
        </router-link>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li>
            <router-link :to="{name: 'Home'}" class="nav-link px-2 text-secondary">Home</router-link>
          </li>
          <li>
            <router-link :to="{name: 'Category'}" class="nav-link px-2 text-white">Categories</router-link>
          </li>
          <li>
            <router-link :to="{name: 'MealSearch'}" class="nav-link px-2 text-white">Meals Listing</router-link>
          </li>
          <li>
            <router-link :to="{name: 'MealsByLetter', params:{ letter: 'A' }}" class="nav-link px-2 text-white">Meals by Letter</router-link>
          </li>
        </ul>

      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>