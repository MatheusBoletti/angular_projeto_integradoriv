import { Component } from '@angular/core';

@Component({
  selector: 'app-ex2',
  standalone: false,
  templateUrl: './ex2.html'
})

export class Ex2 {
  produto = 'Teclado';
  preco = 150;
  quantidade = 3;
}