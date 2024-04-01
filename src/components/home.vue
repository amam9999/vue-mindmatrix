<template>
  <div id="home" class="hero">
    <h1>Welcome to MindMatrix</h1>
    <p>Your journey into the world of knowledge begins here.</p>
  </div>

  <div class="bottom-sections-container">
    <div id="flashcards">
      <h2>Flashcards</h2>
      <router-link to="/flashcard" class="btn">Flashcards</router-link>
    </div>

    <div id="quizzes">
      <h2>Quizzes</h2>
      <router-link to="/quiz" class="btn">Quizzes</router-link>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.bottom-sections-container {
  display: flex;
  justify-content: space-evenly;
  padding: 50px 0;
  background-color: #fff;
  width: 50%;
}

/* Styling for individual sections */
.bottom-sections-container section {
  flex-basis: 45%;
  text-align: center; /* Centers the content */
}
</style>
