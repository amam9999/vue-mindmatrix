<template>
  <Index />
  <Footer />
</template>

<script>
import Footer from "./layout/footer.vue";
import Index from "@/components/index.vue";
export default {
  name: "App",
  components: {
    Footer,
    Index,
  },
};
</script>

<style>
@import url("./assets/css/style.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
