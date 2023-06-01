<template>
    <div class="vue-game2048">
      <div class="grid">
        <div class="row" v-for="(row, i) in gameGrid" :key="i">
          <div class="cell" v-for="(cell, j) in row" :key="j">{{ cell || '' }}</div>
        </div>
      </div>
      <button @click="startGame">Restart Game</button>
    </div>
  </template>

  <script>
  export default {
    name: 'VueGame2048',
    data() {
      return {
        gameGrid: [],
        gameOver: false
      };
    },
    methods: {
      startGame() {
        for (let i = 0; i < 4; i++) {
          this.gameGrid[i] = [];
          for (let j = 0; j < 4; j++) {
            this.gameGrid[i][j] = 0;
          }
        }

        this.addRandomNumber();
        this.addRandomNumber();
      },
      addRandomNumber() {
        let emptyCells = [];
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            if (this.gameGrid[i][j] === 0) {
              emptyCells.push({i, j});
            }
          }
        }

        if (emptyCells.length === 0) {
          this.gameOver = true;
        } else {
          let randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
          this.gameGrid[randomCell.i][randomCell.j] = (Math.random() < 0.9) ? 2 : 4;
        }
      },
      moveLeft() {
        // Ici, vous implémenterez la logique pour déplacer toutes les tuiles vers la gauche
      },
      moveRight() {
        // Ici, vous implémenterez la logique pour déplacer toutes les tuiles vers la droite
      },
      moveUp() {
        // Ici, vous implémenterez la logique pour déplacer toutes les tuiles vers le haut
      },
      moveDown() {
        // Ici, vous implémenterez la logique pour déplacer toutes les tuiles vers le bas
      }
    },
    mounted() {
      this.startGame();
    }
  }
  </script>

  <style scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }

  .cell {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    border: 1px solid #000;
  }
  </style>
