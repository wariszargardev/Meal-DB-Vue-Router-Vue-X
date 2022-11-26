<template>
  <Header/>
  <div class="container mt-2 mb-2">
    <router-view/>
  </div>
  <Footer/>
</template>

<script>
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

export default {
  name: "DefaultLayout",
  components: {Footer, Header}
}
</script>

<style scoped>

</style>