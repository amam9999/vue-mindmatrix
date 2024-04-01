<template>
  <div class="content-wrap">
    <div
      ref="startup"
      id="startup"
      :class="{ startup: true, hidden: isDisplay }"
    >
      <h1 id="logo">MindMatrix</h1>
    </div>
    <Menu :class="{ hidden: !isDisplay }"></Menu>
    <main
      ref="mainContent"
      id="main-content"
      :class="{ mainContent: true, hidden: !isDisplay }"
    >
      <div class="mainView">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>
<script setup>
import Menu from "./menu.vue";
import { ref, onMounted, reactive } from "vue";
let isDisplay = ref(false);
function scrolling() {
  isDisplay.value = true;
  window.removeEventListener("scroll", scrolling);
}
onMounted(() => {
  window.addEventListener("scroll", scrolling);
});
</script>
<style scoped>
.hidden {
  display: none;
}
.mainView {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 200px;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;
  min-height: calc(100vh - 90px);
}
</style>
