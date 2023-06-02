<template>
    <div class="game2048">
      <h1>Jeu 2048</h1>
      <div class="game-board">
        <div class="grid-row" v-for="(row, rowIndex) in grid" :key="rowIndex">
          <div class="grid-cell" v-for="(cell, cellIndex) in row" :key="cellIndex" :data-value="cell">
            {{ cell !== 0 ? cell : '' }}
          </div>
        </div>
      </div>
      <div class="controls">
        <button class="control-button" @click="move('up')">Haut</button>
        <button class="control-button" @click="move('down')">Bas</button>
        <button class="control-button" @click="move('left')">Gauche</button>
        <button class="control-button" @click="move('right')">Droite</button>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: 'VueGame2048',
    data() {
      return {
        grid: [],
        size: 4,
        moves: 0,
        isGameOver: false,
      };
    },
    created() {
      this.initGame();
    },
    methods: {
      initGame() {
        for (let i = 0; i < this.size; i++) {
          this.grid[i] = Array(this.size).fill(0);
        }
        this.addNewTile();
        this.addNewTile();
      },
      addNewTile() {
        let emptyCells = [];
        for (let row = 0; row < this.size; row++) {
          for (let col = 0; col < this.size; col++) {
            if (this.grid[row][col] === 0) {
              emptyCells.push({ row: row, col: col });
            }
          }
        }
        if (emptyCells.length) {
          let randomCell = emptyCells[this.getRandomInt(0, emptyCells.length)];
          this.grid[randomCell.row][randomCell.col] = Math.random() < 0.9 ? 2 : 4;
        }
      },
      getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      },
      move(direction) {
        let hasChanged = false;
        const oldGrid = this.grid.map(row => [...row]);

        if (direction === 'up' || direction === 'down') {
          this.grid = this.transpose(this.grid);
        }

        if (direction === 'right' || direction === 'down') {
          this.grid = this.grid.map(row => row.reverse());
        }

        for (let i = 0; i < this.size; i++) {
          let resultRow = this.collapse(this.grid[i]);
          for (let j = 0; j < this.size; j++) {
            if (this.grid[i][j] !== resultRow[j]) {
              hasChanged = true;
            }
            this.grid[i][j] = resultRow[j];
          }
        }

        if (direction === 'right' || direction === 'down') {
          this.grid = this.grid.map(row => row.reverse());
        }

        if (direction === 'up' || direction === 'down') {
          this.grid = this.transpose(this.grid);
        }

        if (hasChanged) {
          this.addNewTile();
        }

        if (this.grid.toString() !== oldGrid.toString()) {
          this.moves++;
        }

        if (!this.isMoveAvailable()) {
          this.isGameOver = true;
        }
      },
      collapse(row) {
        let newRow = row.filter(item => item !== 0);
        while (newRow.length < this.size) {
          newRow.push(0);
        }

        for (let i = 0; i < newRow.length - 1; i++) {
          if (newRow[i] === newRow[i + 1]) {
            newRow[i] = newRow[i] * 2;
            newRow.splice(i + 1, 1);
            newRow.push(0);
          }
        }
        return newRow;
      },
      transpose(matrix) {
        const transposedMatrix = matrix[0].map((col, i) => matrix.map(row => row[i]));
        return transposedMatrix;
      },
      isMoveAvailable() {
        for (let row = 0; row < this.size; row++) {
          for (let col = 0; col < this.size; col++) {
            if (this.grid[row][col] === 0) {
              return true;
            }
            const current = this.grid[row][col];
            if (row !== this.size - 1 && this.grid[row + 1][col] === current) {
              return true;
            }
            if (col !== this.size - 1 && this.grid[row][col + 1] === current) {
              return true;
            }
          }
        }
        return false;
      },
    },
  };
  </script>

  <style scoped>
  .game2048 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .game-board {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 300px;
    margin: 20px 0;
  }

  .grid-row {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }

  .grid-cell {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    background-color: #ccc0b4;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  .grid-cell[data-value='0'] {
    background-color: #ccc0b4;
  }
  .grid-cell[data-value='2'] {
    background-color: #eee4da;
  }
  .grid-cell[data-value='4'] {
    background-color: #ede0c8;
  }
  .grid-cell[data-value='8'] {
    background-color: #f2b179;
  }
  .grid-cell[data-value='16'] {
    background-color: #f59563;
  }
    .grid-cell[data-value='32'] {
        background-color: #f67c5f;
    }
    .grid-cell[data-value='64'] {
        background-color: #f65e3b;
    }
    .grid-cell[data-value='128'] {
        background-color: #edcf72;
    }
    .grid-cell[data-value='256'] {
        background-color: #edcc61;
    }
    .grid-cell[data-value='512'] {
        background-color: #edc850;
    }
    .grid-cell[data-value='1024'] {
        background-color: #edc53f;
    }
    .grid-cell[data-value='2048'] {
        background-color: #edc22e;
    }


  .controls {
    display: flex;
    justify-content: space-between;
    width: 300px;
  }

  .control-button {
    padding: 10px;
    font-size: 1em;
  }
  </style>
