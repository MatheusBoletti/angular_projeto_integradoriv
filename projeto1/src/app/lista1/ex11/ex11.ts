import { Component } from '@angular/core';

@Component({
  selector: 'app-ex11',
  standalone: false,
  templateUrl: './ex11.html',
  styleUrl: './ex11.scss',
})

export class Ex11 {
  produtoCarrinho = 'Mouse Gamer';
  precoCarrinho = 120;
  quantidadeCarrinho = 1;

  mensagemCarrinho = '';

  aumentarQuantidade() {
    this.quantidadeCarrinho++;
  }

  diminuirQuantidade() {
    if (this.quantidadeCarrinho > 1) {
      this.quantidadeCarrinho--;
    }
  }

  adicionarCarrinho() {
    this.mensagemCarrinho =
      `Adicionado: ${this.quantidadeCarrinho}x ${this.produtoCarrinho}`;
  }
}
