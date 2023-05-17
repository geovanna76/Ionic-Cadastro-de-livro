import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
titulo:string="";
autor:string="";
personagem:string="";
paginas:string="";
categoria:string="";

  constructor(
    private rota: Router
    ) {}


    abrirPaginaTeste(){                 
      this.rota.navigateByUrl(`/tela-teste/
      ${this.titulo}/${this.autor}/${this.personagem}/${this.paginas}
      /${this.categoria}`);
    }



  }

  //Explicação:
  //Criamos um cadastro de livros queremos enviar para uma segunda pagina:
  //1-importamos o "router" la em cima
  //2-instanciamos no construtor
  //3- usando a rota, definimos o caminho e enviamos os parametros(variaveis)
