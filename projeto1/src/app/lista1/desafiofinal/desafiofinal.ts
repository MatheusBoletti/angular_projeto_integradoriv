import { Component } from '@angular/core';

@Component({
  selector: 'app-desafiofinal',
  standalone: false,
  templateUrl: './desafiofinal.html',
  styleUrl: './desafiofinal.scss',
})

export class Desafiofinal {
  aluno = '';
  disciplinas = 1;
  mensagemMatricula = '';

  aumentarDisciplinas() {
    this.disciplinas++;
  }

  diminuirDisciplinas() {
    if (this.disciplinas > 1) {
      this.disciplinas--;
    }
  }

  realizarMatricula() {
    this.mensagemMatricula =
      `Matrícula realizada para ${this.aluno}, com ${this.disciplinas} disciplinas.`;
  }
}
