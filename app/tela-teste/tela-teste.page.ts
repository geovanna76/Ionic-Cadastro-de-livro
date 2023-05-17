import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-teste',
  templateUrl: './tela-teste.page.html',
  styleUrls: ['./tela-teste.page.scss'],
})
export class TelaTestePage implements OnInit {
  titulo: any;
  autor: any;
  personagem: any;
  paginas: any;
  categoria: any;

  constructor(
    private rotaAtiva: ActivatedRoute,
    private rota: Router

  ) {

  }

//exibir os dados para confirmar
  ngOnInit() {
    this.titulo = this.rotaAtiva.snapshot.paramMap.get('titulo')
    this.autor = this.rotaAtiva.snapshot.paramMap.get('autor')
    this.personagem = this.rotaAtiva.snapshot.paramMap.get('personagem')
    this.paginas = this.rotaAtiva.snapshot.paramMap.get('paginas')
    this.categoria = this.rotaAtiva.snapshot.paramMap.get('categoria')
  }

  confirmoCadastro(){
    this.rota.navigateByUrl(`/tela-agradecimento`);
  }

  voltar(){
    this.rota.navigateByUrl(`/home`)
  }
}


//importamos a router e o ActivatedRoute  (router-definie a rota)(ActivatedRoute- recebe os parametros)
//declaramos as mesmas variaveis
//instaciamos no construtor
//em todas as paginas criadas, terá o ngOnInit, ele serve para rerecer os parametros passados
//usamos o ActivatedRoute para receber os parametros
//-----------------------------------------------------
//tem dois btns que quando clicado deve abrir outra tela:
//usando o router definimos o caminho desejado.