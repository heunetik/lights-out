import { Component } from '@angular/core';
import levels from './levels/levels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  levels = levels;
  totalMoves = 0;
  levelMoves = 0;
  levelCounter = 1;
  currentLevel = levels[this.levelCounter];

  down(i, j) {
    this.totalMoves++;
    this.levelMoves++;
    this.currentLevel[i][j] = 1 - this.currentLevel[i][j];
    this.toggleNeighbouringCells(i, j);
    this.checkBoardStatus();
  }

  private toggleNeighbouringCells(row: number, column: number) {
    const neighbors = [
      { x: row, y: column - 1 }, // Left
      { x: row - 1, y: column },
      { x: row, y: column + 1 },
      { x: row + 1, y: column }
    ];
    neighbors.forEach(e => {
      if (e.x >= 0 && e.x < this.currentLevel.length && e.y >= 0 && e.y < this.currentLevel.length) {
        this.currentLevel[e.x][e.y] = 1 - this.currentLevel[e.x][e.y];
      }
    });
  }

  private checkBoardStatus() {
    const flattenedLevel = this.currentLevel.flat(1);
    const finished = flattenedLevel.every((x: number) => x === 0);
    if (finished) {
      this.levelMoves = 0;
      this.levelCounter++;
      this.currentLevel = this.levels[this.levelCounter];
    }
  }
}
