import { Component, OnInit } from '@angular/core';
import { Artigo } from '../../models/artigo.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
})
export class GridComponent implements OnInit {
  artigos: Artigo[] = [];

  ngOnInit(): void {
    this.artigos = this.getArtigos();
  }

  getArtigos(): Artigo[] {
    const artigos: Artigo[] = [
      {
        titulo: 'Tudo o que eu entendi sobre Visão geral de algoritmos',
        likes: 898,
        comentarios: 271,
        username: 'momo',
        horario: '20:27',
      },
      {
        titulo: 'Preciso de ajuda com Functions em JavaScript',
        likes: 8,
        comentarios: 17,
        username: 'jonasAquino39',
        horario: '20:20',
      },
      {
        titulo: 'Preciso de ajuda com Functions em TypeScript',
        likes: 18,
        comentarios: 23,
        username: 'jonasAquino39',
        horario: '19:22',
      },
      {
        titulo: 'Vocês utilizam HTML semântico?',
        likes: 177,
        comentarios: 101,
        username: 'guilhermeazevedo79',
        horario: '18:20',
      },
      {
        titulo: 'Vocês tem que evitar o uso de funções impuras!',
        likes: 78,
        comentarios: 10,
        username: 'leonardo77',
        horario: '17:33',
      },
      {
        titulo:
          'Pitch: Finance Facilite o gerenciamento de suas finanças com integração ao excel',
        likes: 17,
        comentarios: 4,
        username: 'ArthurZin',
        horario: '20:01',
      },
      {
        titulo:
          'Estratégias e Métricas: O Que Funcionou (e o Que Não Funcionou) na Minha Busca de Emprego Recente',
        likes: 16,
        comentarios: 0,
        username: 'filipeleonelbatista',
        horario: '20:06',
      },
      {
        titulo:
          'ANTLR - Uma ferramenta para fazer parsing de expressões (ou: não use regex quando há soluções melhores)',
        likes: 11,
        comentarios: 1,
        username: 'kht',
        horario: '20:05',
      },
      {
        titulo: 'Diátaxis: um framework para melhores documentações técnicas',
        likes: 7,
        comentarios: 0,
        username: 'lemuelroberto',
        horario: '20:014',
      },
      {
        titulo: 'Preciso de ajuda com Functions em JavaScript',
        likes: 3,
        comentarios: 11,
        username: 'maycony',
        horario: '20:01',
      },
      {
        titulo: 'Conselhos para me ajudar no meu projeto pessoal.',
        likes: 5,
        comentarios: 1,
        username: 'ZambeliDev',
        horario: '20:07',
      },
      {
        titulo: 'Como eu explicaria protocolos para uma criança de 12 anos!',
        likes: 4,
        comentarios: 1,
        username: 'ojonatasquirino',
        horario: '20:03',
      },
      {
        titulo:
          'Tutorial de como criar uma rotina de LOGIN com Nodejs, Mysql, Passaport e Handlebars',
        likes: 4,
        comentarios: 1,
        username: 'Sabalozua18',
        horario: '20:06',
      },
      {
        titulo: 'Vagas fecham antes de eu chegar na entrevista',
        likes: 4,
        comentarios: 0,
        username: 'Anderson',
        horario: '20:06',
      },
      {
        titulo: 'O que tem sido debatido no TabNews? (02/09/2024 - 08/09/2024)',
        likes: 3,
        comentarios: 0,
        username: 'luishjacinto',
        horario: '20:09',
      },
      {
        titulo: 'Recomendação de livros',
        likes: 2,
        comentarios: 1,
        username: 'Vradimmir',
        horario: '20:02',
      },
      {
        titulo:
          'Dúvida: O que responder quando te perguntarem: "Qual você cobra por hora?"',
        likes: 4,
        comentarios: 3,
        username: 'gabrielduete',
        horario: '20:03',
      },
      {
        titulo: 'Dando mais moral para nossos colegas designers',
        likes: 4,
        comentarios: 0,
        username: 'gabrielduete',
        horario: '20:03',
      },
      {
        titulo: 'Faturei 50k com meu produto para surpreender minha namorada',
        likes: 66,
        comentarios: 18,
        username: 'andreeliasdev',
        horario: '20:04',
      },
      {
        titulo: 'O Verdadeiro Custo do “Armazenamento Gratuito”',
        likes: 46,
        comentarios: 1,
        username: '0xtny',
        horario: '20:07',
      },
      {
        titulo: 'Pitch: Conheça o site Jogos em promoções (MVP Finalizado).',
        likes: 27,
        comentarios: 24,
        username: 'saraiva',
        horario: '20:06',
      },
      {
        titulo: 'Principais comandos perigosos em Linux',
        likes: 26,
        comentarios: 8,
        username: 'JeielLimaMiranda',
        horario: '20:05',
      },
      {
        titulo: 'Meu caminho até a minha primeira venda',
        likes: 18,
        comentarios: 9,
        username: 'santigonzaga',
        horario: '20:05',
      },
      {
        titulo:
          'Tenho muitas responsabilidades e não recebo metade do valor monetário que seria adequado.',
        likes: 14,
        comentarios: 9,
        username: 'umProgramadorCansado',
        horario: '20:04',
      },
      {
        titulo:
          'Demotivator AI - Plataforma para gerar citações engraçadas como um coach "desmotivacional"',
        likes: 14,
        comentarios: 11,
        username: 'hermogenes',
        horario: '20:05',
      },
      {
        titulo:
          'Use o v0 da Vercel para criar seu front-end React em segundos com a ajuda da IA!',
        likes: 13,
        comentarios: 6,
        username: 'eduardoMats',
        horario: '20:03',
      },
      {
        titulo: 'Test runners e frameworks de teste em JavaScript',
        likes: 12,
        comentarios: 3,
        username: 'rafael',
        horario: '20:05',
      },
      {
        titulo:
          'Fiz um BubbleSort em assembly (MIPS) para rodar no simulador Logisim',
        likes: 12,
        comentarios: 6,
        username: 'koziel',
        horario: '20:03',
      },
      {
        titulo: 'Meu problema com o temas dark',
        likes: 7,
        comentarios: 12,
        username: 'itsmatheusmoura',
        horario: '20:04',
      },
      {
        titulo: 'O VSCode Já era???',
        likes: 4,
        comentarios: 24,
        username: 'tocodando',
        horario: '20:07',
      },
      {
        titulo:
          '[relato]Umbler, domínio registro.br, AWS LightSail e PHPMailer',
        likes: 10,
        comentarios: 0,
        username: 'Wellington79',
        horario: '20:03',
      },
      {
        titulo: 'Brasileiro líder do projeto Rust for Linux anuncia sua saída',
        likes: 9,
        comentarios: 2,
        username: 'NewsletterOficial',
        horario: '20:05',
      },
    ];

    return artigos;
  }
}
