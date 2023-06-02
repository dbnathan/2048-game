<template>
    <div class="home-page">
      <h1>Bienvenue sur le Jeu 2048!</h1>
      <button class="start-button" @click="startGame">Démarrer une partie</button>
      <button class="settings-button" @click="goToSettings">Paramètres</button>
    </div>
  </template>

  <script>
  export default {
    name: 'HomePage',
    methods: {
  startGame() {
    this.$router.push('/game');
  },
  goToSettings() {
    this.$router.push('/settings');
  }
}

  }
  </script>

  <style scoped>
  .home-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .home-page button {
    margin: 10px;
    padding: 10px;
    font-size: 1.5em;
  }

  .start-button {
    background-color: #4CAF50;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    transition-duration: 0.4s;
    cursor: pointer;
  }

  .start-button:hover {
    background-color: white;
    color: black;
    border: 2px solid #4caf65;
  }

  .settings-button {
    background-color: #46534f;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    transition-duration: 0.4s;
    cursor: pointer;
  }

    .settings-button:hover {
        background-color: white;
        color: black;
        border: 2px solid #46534f;
    }
  </style>
