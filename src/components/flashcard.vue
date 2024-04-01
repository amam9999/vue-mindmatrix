<template>
  <section id="home" class="hero">
    <h1>Welcome to MindMatrix</h1>
    <p>Your journey into the world of knowledge begins here.</p>
  </section>

  <section class="services">
    <!-- Update the form in the programForm.html file -->
    <!-- Replace the existing form with this one -->
    <form class="program-form" action="/chat/flash" method="get">
      <div class="form-item">
        <label for="search">How many Flashcards:</label>
        <input type="number" id="number" name="number" required />
      </div>
      <div class="form-item">
        <label for="search">Search for a Subject:</label>
        <input type="text" id="prompt" name="prompt" required />
      </div>
      <div class="button-area">
        <button type="submit">Generate Flashcard</button>
      </div>
    </form>
  </section>
</template>
<script setup></script>
