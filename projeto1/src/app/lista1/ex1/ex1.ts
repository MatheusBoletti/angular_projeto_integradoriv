import { Component } from '@angular/core';

@Component({
  selector: 'app-ex1',
  standalone: false,
  templateUrl: './ex1.html'
})
export class Ex1 {

  nome: string = 'Carlos';
  idade: number = 25;
  curso: string = 'Sistemas de Informação';

}