<template>
  <nav>
    <ul>
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/flashcard">FlashCard</router-link></li>
      <li><router-link to="/quiz">Quiz</router-link></li>
    </ul>
  </nav>
</template>
<script setup>
let menuData = [];
</script>
<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 200px; /* Adjust the width as needed */
  background-color: #333;
  padding-top: 20px;
  box-sizing: border-box;
  z-index: 9999;
}

nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

nav ul li {
  margin-bottom: 10px;
}

nav ul li a {
  display: block;
  color: #fff;
  text-decoration: none;
  padding: 10px;
  transition: all 0.3s ease;
}

nav ul li a:hover {
  background-color: #555;
}
</style>
