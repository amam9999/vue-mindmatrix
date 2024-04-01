<template>
  <footer class="footer">
    <p>&copy;{{ currentYear }} MindMatrix. All rights reserved.</p>
  </footer>
</template>
<script>
export default {
  setup() {
    const currentYear = new Date().getFullYear();
    return { currentYear };
  },
};
</script>
