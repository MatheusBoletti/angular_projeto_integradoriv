import { Component } from '@angular/core';

@Component({
  selector: 'app-ex9',
  standalone: false,
  templateUrl: './ex9.html'
})

export class Ex9 {

  produto: string = 'Mouse Gamer';
  quantidade: number = 0;

  aumentarEstoque(): void {
    this.quantidade++;
  }

  diminuirEstoque(): void {
    if (this.quantidade > 0) {
      this.quantidade--;
    }
  }
}