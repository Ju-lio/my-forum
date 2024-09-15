import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Subject, takeUntil } from 'rxjs';
import { Artigo } from '../models/artigo.model';

@Injectable({
  // Esta anotação faz com que o Angular gerencie os locais em que o serviço é injetado, não precisando informar nem ao componente, nem ao módulo
  providedIn: 'root',
})
export class ArtigoService {
  destroy$ = new Subject<unknown>();

  getPostContent(username: string, postId: string) {
    let artigos: Artigo[] = [];
    this.getArtigos()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          artigos = response.body ?? [];
        },
      });
    return of(
      new HttpResponse<Artigo>({
        body: artigos.filter(
          (a) => a.username == username && a.id == postId
        )[0],
      })
    );
  }

  getArtigos() {
    const artigos: Artigo[] = [];

    artigos.push({
      id: 'tudo-o-que-eu-entendi-sobre-visao-geral-de-algoritmos',
      titulo: 'Tudo o que eu entendi sobre Visão geral de algoritmos',
      likes: 898,
      comentarios: 271,
      username: 'momo',
      horario: '20:27',
      data: '14/09/2024',
      texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, eros ut interdum euismod, augue diam commodo lectus, eget faucibus turpis nisl ut mi. Ut non placerat massa. Donec ullamcorper neque ut molestie pharetra. Pellentesque porta facilisis quam, et pulvinar elit luctus quis. Etiam tempor laoreet metus et blandit. Quisque vitae ex venenatis, pellentesque risus imperdiet, bibendum eros. Nulla orci leo, congue id neque vitae, cursus dapibus lorem. Proin semper nibh vel aliquam tempus. Sed ac diam placerat, ornare erat a, ornare diam. Aliquam ac ex neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean condimentum arcu sit amet volutpat laoreet. In hac habitasse platea dictumst. Proin mattis lorem quis arcu vulputate, non maximus massa ultrices.

      Proin tincidunt quam sit amet imperdiet viverra. Morbi nec tortor at ipsum imperdiet convallis sed eu velit. Vivamus malesuada elit tortor, at ornare velit maximus vel. Quisque non nulla luctus tellus sollicitudin pharetra vitae interdum risus. Nullam nec tristique felis. In a interdum massa. Donec sollicitudin mollis quam, et lacinia lacus ultricies at. Nam malesuada pellentesque risus et sollicitudin. Morbi auctor nisl dui, sed sagittis odio accumsan sed. Duis luctus massa sit amet sem maximus vulputate.

      Donec vitae porttitor dui, ut porttitor urna. Duis aliquet velit finibus tristique gravida. Curabitur sollicitudin neque et velit mollis, sit amet pellentesque sapien porta. Fusce eu velit tincidunt, finibus purus at, laoreet orci. Donec imperdiet, mi quis laoreet placerat, lectus massa sollicitudin dui, id fermentum quam sem sit amet dolor. Mauris tempor, sapien nec finibus tincidunt, ipsum massa maximus nibh, et tincidunt nunc nulla dapibus risus. Duis iaculis augue eu velit vulputate sollicitudin vitae nec magna. Fusce finibus nec mauris pretium accumsan. Ut vestibulum libero accumsan, pretium neque sed, volutpat nunc. In volutpat pulvinar varius. Nam sed lacus vel risus auctor auctor. Fusce semper porttitor leo eget tincidunt. Aenean et nunc in tortor convallis pharetra vel non odio. Cras semper elit non libero euismod, ut congue leo molestie. Praesent id dui semper, tempor nisi pulvinar, ornare mi. Donec euismod aliquet nisi, at dictum lectus tempor consectetur.`,
    });

    artigos.push({
      id: 'preciso-de-ajuda-com-functions-em-javascript',
      titulo: 'Preciso de ajuda com Functions em JavaScript',
      likes: 8,
      comentarios: 17,
      username: 'jonasAquino39',
      horario: '20:20',
      data: '14/09/2024',
      texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, eros ut interdum euismod, augue diam commodo lectus, eget faucibus turpis nisl ut mi. Ut non placerat massa. Donec ullamcorper neque ut molestie pharetra. Pellentesque porta facilisis quam, et pulvinar elit luctus quis. Etiam tempor laoreet metus et blandit. Quisque vitae ex venenatis, pellentesque risus imperdiet, bibendum eros. Nulla orci leo, congue id neque vitae, cursus dapibus lorem. Proin semper nibh vel aliquam tempus. Sed ac diam placerat, ornare erat a, ornare diam. Aliquam ac ex neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean condimentum arcu sit amet volutpat laoreet. In hac habitasse platea dictumst. Proin mattis lorem quis arcu vulputate, non maximus massa ultrices.

      Proin tincidunt quam sit amet imperdiet viverra. Morbi nec tortor at ipsum imperdiet convallis sed eu velit. Vivamus malesuada elit tortor, at ornare velit maximus vel. Quisque non nulla luctus tellus sollicitudin pharetra vitae interdum risus. Nullam nec tristique felis. In a interdum massa. Donec sollicitudin mollis quam, et lacinia lacus ultricies at. Nam malesuada pellentesque risus et sollicitudin. Morbi auctor nisl dui, sed sagittis odio accumsan sed. Duis luctus massa sit amet sem maximus vulputate.

      Donec vitae porttitor dui, ut porttitor urna. Duis aliquet velit finibus tristique gravida. Curabitur sollicitudin neque et velit mollis, sit amet pellentesque sapien porta. Fusce eu velit tincidunt, finibus purus at, laoreet orci. Donec imperdiet, mi quis laoreet placerat, lectus massa sollicitudin dui, id fermentum quam sem sit amet dolor. Mauris tempor, sapien nec finibus tincidunt, ipsum massa maximus nibh, et tincidunt nunc nulla dapibus risus. Duis iaculis augue eu velit vulputate sollicitudin vitae nec magna. Fusce finibus nec mauris pretium accumsan. Ut vestibulum libero accumsan, pretium neque sed, volutpat nunc. In volutpat pulvinar varius. Nam sed lacus vel risus auctor auctor. Fusce semper porttitor leo eget tincidunt. Aenean et nunc in tortor convallis pharetra vel non odio. Cras semper elit non libero euismod, ut congue leo molestie. Praesent id dui semper, tempor nisi pulvinar, ornare mi. Donec euismod aliquet nisi, at dictum lectus tempor consectetur.`,
    });

    artigos.push({
      id: 'preciso-de-ajuda-com-functions-em-typescript',
      titulo: 'Preciso de ajuda com Functions em TypeScript',
      likes: 18,
      comentarios: 23,
      username: 'jonasAquino39',
      horario: '19:22',
      data: '14/09/2024',
      texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, eros ut interdum euismod, augue diam commodo lectus, eget faucibus turpis nisl ut mi. Ut non placerat massa. Donec ullamcorper neque ut molestie pharetra. Pellentesque porta facilisis quam, et pulvinar elit luctus quis. Etiam tempor laoreet metus et blandit. Quisque vitae ex venenatis, pellentesque risus imperdiet, bibendum eros. Nulla orci leo, congue id neque vitae, cursus dapibus lorem. Proin semper nibh vel aliquam tempus. Sed ac diam placerat, ornare erat a, ornare diam. Aliquam ac ex neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean condimentum arcu sit amet volutpat laoreet. In hac habitasse platea dictumst. Proin mattis lorem quis arcu vulputate, non maximus massa ultrices.

      Proin tincidunt quam sit amet imperdiet viverra. Morbi nec tortor at ipsum imperdiet convallis sed eu velit. Vivamus malesuada elit tortor, at ornare velit maximus vel. Quisque non nulla luctus tellus sollicitudin pharetra vitae interdum risus. Nullam nec tristique felis. In a interdum massa. Donec sollicitudin mollis quam, et lacinia lacus ultricies at. Nam malesuada pellentesque risus et sollicitudin. Morbi auctor nisl dui, sed sagittis odio accumsan sed. Duis luctus massa sit amet sem maximus vulputate.

      Donec vitae porttitor dui, ut porttitor urna. Duis aliquet velit finibus tristique gravida. Curabitur sollicitudin neque et velit mollis, sit amet pellentesque sapien porta. Fusce eu velit tincidunt, finibus purus at, laoreet orci. Donec imperdiet, mi quis laoreet placerat, lectus massa sollicitudin dui, id fermentum quam sem sit amet dolor. Mauris tempor, sapien nec finibus tincidunt, ipsum massa maximus nibh, et tincidunt nunc nulla dapibus risus. Duis iaculis augue eu velit vulputate sollicitudin vitae nec magna. Fusce finibus nec mauris pretium accumsan. Ut vestibulum libero accumsan, pretium neque sed, volutpat nunc. In volutpat pulvinar varius. Nam sed lacus vel risus auctor auctor. Fusce semper porttitor leo eget tincidunt. Aenean et nunc in tortor convallis pharetra vel non odio. Cras semper elit non libero euismod, ut congue leo molestie. Praesent id dui semper, tempor nisi pulvinar, ornare mi. Donec euismod aliquet nisi, at dictum lectus tempor consectetur.`,
    });

    artigos.push({
      id: 'voces-utilizam-html-semantico',
      titulo: 'Vocês utilizam HTML semântico?',
      likes: 177,
      comentarios: 101,
      username: 'guilhermeazevedo79',
      horario: '18:20',
      data: '14/09/2024',
      texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, eros ut interdum euismod, augue diam commodo lectus, eget faucibus turpis nisl ut mi. Ut non placerat massa. Donec ullamcorper neque ut molestie pharetra. Pellentesque porta facilisis quam, et pulvinar elit luctus quis. Etiam tempor laoreet metus et blandit. Quisque vitae ex venenatis, pellentesque risus imperdiet, bibendum eros. Nulla orci leo, congue id neque vitae, cursus dapibus lorem. Proin semper nibh vel aliquam tempus. Sed ac diam placerat, ornare erat a, ornare diam. Aliquam ac ex neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean condimentum arcu sit amet volutpat laoreet. In hac habitasse platea dictumst. Proin mattis lorem quis arcu vulputate, non maximus massa ultrices.

      Proin tincidunt quam sit amet imperdiet viverra. Morbi nec tortor at ipsum imperdiet convallis sed eu velit. Vivamus malesuada elit tortor, at ornare velit maximus vel. Quisque non nulla luctus tellus sollicitudin pharetra vitae interdum risus. Nullam nec tristique felis. In a interdum massa. Donec sollicitudin mollis quam, et lacinia lacus ultricies at. Nam malesuada pellentesque risus et sollicitudin. Morbi auctor nisl dui, sed sagittis odio accumsan sed. Duis luctus massa sit amet sem maximus vulputate.

      Donec vitae porttitor dui, ut porttitor urna. Duis aliquet velit finibus tristique gravida. Curabitur sollicitudin neque et velit mollis, sit amet pellentesque sapien porta. Fusce eu velit tincidunt, finibus purus at, laoreet orci. Donec imperdiet, mi quis laoreet placerat, lectus massa sollicitudin dui, id fermentum quam sem sit amet dolor. Mauris tempor, sapien nec finibus tincidunt, ipsum massa maximus nibh, et tincidunt nunc nulla dapibus risus. Duis iaculis augue eu velit vulputate sollicitudin vitae nec magna. Fusce finibus nec mauris pretium accumsan. Ut vestibulum libero accumsan, pretium neque sed, volutpat nunc. In volutpat pulvinar varius. Nam sed lacus vel risus auctor auctor. Fusce semper porttitor leo eget tincidunt. Aenean et nunc in tortor convallis pharetra vel non odio. Cras semper elit non libero euismod, ut congue leo molestie. Praesent id dui semper, tempor nisi pulvinar, ornare mi. Donec euismod aliquet nisi, at dictum lectus tempor consectetur.`,
    });

    artigos.push({
      id: 'voces-tem-que-evitar-o-uso-de-funcoes-impuras!',
      titulo: 'Vocês tem que evitar o uso de funções impuras!',
      likes: 78,
      comentarios: 10,
      username: 'leonardo77',
      horario: '17:33',
      data: '14/09/2024',
      texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, eros ut interdum euismod, augue diam commodo lectus, eget faucibus turpis nisl ut mi. Ut non placerat massa. Donec ullamcorper neque ut molestie pharetra. Pellentesque porta facilisis quam, et pulvinar elit luctus quis. Etiam tempor laoreet metus et blandit. Quisque vitae ex venenatis, pellentesque risus imperdiet, bibendum eros. Nulla orci leo, congue id neque vitae, cursus dapibus lorem. Proin semper nibh vel aliquam tempus. Sed ac diam placerat, ornare erat a, ornare diam. Aliquam ac ex neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean condimentum arcu sit amet volutpat laoreet. In hac habitasse platea dictumst. Proin mattis lorem quis arcu vulputate, non maximus massa ultrices.

      Proin tincidunt quam sit amet imperdiet viverra. Morbi nec tortor at ipsum imperdiet convallis sed eu velit. Vivamus malesuada elit tortor, at ornare velit maximus vel. Quisque non nulla luctus tellus sollicitudin pharetra vitae interdum risus. Nullam nec tristique felis. In a interdum massa. Donec sollicitudin mollis quam, et lacinia lacus ultricies at. Nam malesuada pellentesque risus et sollicitudin. Morbi auctor nisl dui, sed sagittis odio accumsan sed. Duis luctus massa sit amet sem maximus vulputate.

      Donec vitae porttitor dui, ut porttitor urna. Duis aliquet velit finibus tristique gravida. Curabitur sollicitudin neque et velit mollis, sit amet pellentesque sapien porta. Fusce eu velit tincidunt, finibus purus at, laoreet orci. Donec imperdiet, mi quis laoreet placerat, lectus massa sollicitudin dui, id fermentum quam sem sit amet dolor. Mauris tempor, sapien nec finibus tincidunt, ipsum massa maximus nibh, et tincidunt nunc nulla dapibus risus. Duis iaculis augue eu velit vulputate sollicitudin vitae nec magna. Fusce finibus nec mauris pretium accumsan. Ut vestibulum libero accumsan, pretium neque sed, volutpat nunc. In volutpat pulvinar varius. Nam sed lacus vel risus auctor auctor. Fusce semper porttitor leo eget tincidunt. Aenean et nunc in tortor convallis pharetra vel non odio. Cras semper elit non libero euismod, ut congue leo molestie. Praesent id dui semper, tempor nisi pulvinar, ornare mi. Donec euismod aliquet nisi, at dictum lectus tempor consectetur.`,
    });

    artigos.push({
      id: 'pitch-finance-facilite-o-gerenciamento-de-suas-financas-com-integracao-ao-excel',
      titulo:
        'Pitch: Finance Facilite o gerenciamento de suas finanças com integração ao excel',
      likes: 17,
      comentarios: 4,
      username: 'ArthurZin',
      horario: '20:01',
      data: '14/09/2024',
      texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, eros ut interdum euismod, augue diam commodo lectus, eget faucibus turpis nisl ut mi. Ut non placerat massa. Donec ullamcorper neque ut molestie pharetra. Pellentesque porta facilisis quam, et pulvinar elit luctus quis. Etiam tempor laoreet metus et blandit. Quisque vitae ex venenatis, pellentesque risus imperdiet, bibendum eros. Nulla orci leo, congue id neque vitae, cursus dapibus lorem. Proin semper nibh vel aliquam tempus. Sed ac diam placerat, ornare erat a, ornare diam. Aliquam ac ex neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean condimentum arcu sit amet volutpat laoreet. In hac habitasse platea dictumst. Proin mattis lorem quis arcu vulputate, non maximus massa ultrices.

      Proin tincidunt quam sit amet imperdiet viverra. Morbi nec tortor at ipsum imperdiet convallis sed eu velit. Vivamus malesuada elit tortor, at ornare velit maximus vel. Quisque non nulla luctus tellus sollicitudin pharetra vitae interdum risus. Nullam nec tristique felis. In a interdum massa. Donec sollicitudin mollis quam, et lacinia lacus ultricies at. Nam malesuada pellentesque risus et sollicitudin. Morbi auctor nisl dui, sed sagittis odio accumsan sed. Duis luctus massa sit amet sem maximus vulputate.

      Donec vitae porttitor dui, ut porttitor urna. Duis aliquet velit finibus tristique gravida. Curabitur sollicitudin neque et velit mollis, sit amet pellentesque sapien porta. Fusce eu velit tincidunt, finibus purus at, laoreet orci. Donec imperdiet, mi quis laoreet placerat, lectus massa sollicitudin dui, id fermentum quam sem sit amet dolor. Mauris tempor, sapien nec finibus tincidunt, ipsum massa maximus nibh, et tincidunt nunc nulla dapibus risus. Duis iaculis augue eu velit vulputate sollicitudin vitae nec magna. Fusce finibus nec mauris pretium accumsan. Ut vestibulum libero accumsan, pretium neque sed, volutpat nunc. In volutpat pulvinar varius. Nam sed lacus vel risus auctor auctor. Fusce semper porttitor leo eget tincidunt. Aenean et nunc in tortor convallis pharetra vel non odio. Cras semper elit non libero euismod, ut congue leo molestie. Praesent id dui semper, tempor nisi pulvinar, ornare mi. Donec euismod aliquet nisi, at dictum lectus tempor consectetur.`,
    });

    artigos.push({
      id: 'estrategias-e-metricas-o-que-funcionou-e-o-que-nao-funcionou-na-minha-busca-de-emprego',
      titulo:
        'Estratégias e Métricas: O Que Funcionou (e o Que Não Funcionou) na Minha Busca de Emprego Recente',
      likes: 16,
      comentarios: 0,
      username: 'filipeleonelbatista',
      horario: '20:06',
      data: '14/09/2024',
      texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, eros ut interdum euismod, augue diam commodo lectus, eget faucibus turpis nisl ut mi. Ut non placerat massa. Donec ullamcorper neque ut molestie pharetra. Pellentesque porta facilisis quam, et pulvinar elit luctus quis. Etiam tempor laoreet metus et blandit. Quisque vitae ex venenatis, pellentesque risus imperdiet, bibendum eros. Nulla orci leo, congue id neque vitae, cursus dapibus lorem. Proin semper nibh vel aliquam tempus. Sed ac diam placerat, ornare erat a, ornare diam. Aliquam ac ex neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean condimentum arcu sit amet volutpat laoreet. In hac habitasse platea dictumst. Proin mattis lorem quis arcu vulputate, non maximus massa ultrices.

      Proin tincidunt quam sit amet imperdiet viverra. Morbi nec tortor at ipsum imperdiet convallis sed eu velit. Vivamus malesuada elit tortor, at ornare velit maximus vel. Quisque non nulla luctus tellus sollicitudin pharetra vitae interdum risus. Nullam nec tristique felis. In a interdum massa. Donec sollicitudin mollis quam, et lacinia lacus ultricies at. Nam malesuada pellentesque risus et sollicitudin. Morbi auctor nisl dui, sed sagittis odio accumsan sed. Duis luctus massa sit amet sem maximus vulputate.

      Donec vitae porttitor dui, ut porttitor urna. Duis aliquet velit finibus tristique gravida. Curabitur sollicitudin neque et velit mollis, sit amet pellentesque sapien porta. Fusce eu velit tincidunt, finibus purus at, laoreet orci. Donec imperdiet, mi quis laoreet placerat, lectus massa sollicitudin dui, id fermentum quam sem sit amet dolor. Mauris tempor, sapien nec finibus tincidunt, ipsum massa maximus nibh, et tincidunt nunc nulla dapibus risus. Duis iaculis augue eu velit vulputate sollicitudin vitae nec magna. Fusce finibus nec mauris pretium accumsan. Ut vestibulum libero accumsan, pretium neque sed, volutpat nunc. In volutpat pulvinar varius. Nam sed lacus vel risus auctor auctor. Fusce semper porttitor leo eget tincidunt. Aenean et nunc in tortor convallis pharetra vel non odio. Cras semper elit non libero euismod, ut congue leo molestie. Praesent id dui semper, tempor nisi pulvinar, ornare mi. Donec euismod aliquet nisi, at dictum lectus tempor consectetur.`,
    });

    artigos.push({
      id: 'antlr-uma-ferramenta-para-fazer-parsing-de-expressoes-ou-nao-use-regex-quando-ha',
      titulo:
        'ANTLR - Uma ferramenta para fazer parsing de expressões (ou: não use regex quando há soluções melhores)',
      likes: 11,
      comentarios: 1,
      username: 'kht',
      horario: '20:05',
      data: '14/09/2024',
      texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, eros ut interdum euismod, augue diam commodo lectus, eget faucibus turpis nisl ut mi. Ut non placerat massa. Donec ullamcorper neque ut molestie pharetra. Pellentesque porta facilisis quam, et pulvinar elit luctus quis. Etiam tempor laoreet metus et blandit. Quisque vitae ex venenatis, pellentesque risus imperdiet, bibendum eros. Nulla orci leo, congue id neque vitae, cursus dapibus lorem. Proin semper nibh vel aliquam tempus. Sed ac diam placerat, ornare erat a, ornare diam. Aliquam ac ex neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean condimentum arcu sit amet volutpat laoreet. In hac habitasse platea dictumst. Proin mattis lorem quis arcu vulputate, non maximus massa ultrices.

      Proin tincidunt quam sit amet imperdiet viverra. Morbi nec tortor at ipsum imperdiet convallis sed eu velit. Vivamus malesuada elit tortor, at ornare velit maximus vel. Quisque non nulla luctus tellus sollicitudin pharetra vitae interdum risus. Nullam nec tristique felis. In a interdum massa. Donec sollicitudin mollis quam, et lacinia lacus ultricies at. Nam malesuada pellentesque risus et sollicitudin. Morbi auctor nisl dui, sed sagittis odio accumsan sed. Duis luctus massa sit amet sem maximus vulputate.

      Donec vitae porttitor dui, ut porttitor urna. Duis aliquet velit finibus tristique gravida. Curabitur sollicitudin neque et velit mollis, sit amet pellentesque sapien porta. Fusce eu velit tincidunt, finibus purus at, laoreet orci. Donec imperdiet, mi quis laoreet placerat, lectus massa sollicitudin dui, id fermentum quam sem sit amet dolor. Mauris tempor, sapien nec finibus tincidunt, ipsum massa maximus nibh, et tincidunt nunc nulla dapibus risus. Duis iaculis augue eu velit vulputate sollicitudin vitae nec magna. Fusce finibus nec mauris pretium accumsan. Ut vestibulum libero accumsan, pretium neque sed, volutpat nunc. In volutpat pulvinar varius. Nam sed lacus vel risus auctor auctor. Fusce semper porttitor leo eget tincidunt. Aenean et nunc in tortor convallis pharetra vel non odio. Cras semper elit non libero euismod, ut congue leo molestie. Praesent id dui semper, tempor nisi pulvinar, ornare mi. Donec euismod aliquet nisi, at dictum lectus tempor consectetur.`,
    });

    artigos.push({
      id: 'diataxis:-um-framework-para-melhores-documentacoes-tecnicas',
      titulo: 'Diátaxis: um framework para melhores documentações técnicas',
      likes: 7,
      comentarios: 0,
      username: 'lemuelroberto',
      horario: '20:014',
      data: '14/09/2024',
      texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, eros ut interdum euismod, augue diam commodo lectus, eget faucibus turpis nisl ut mi. Ut non placerat massa. Donec ullamcorper neque ut molestie pharetra. Pellentesque porta facilisis quam, et pulvinar elit luctus quis. Etiam tempor laoreet metus et blandit. Quisque vitae ex venenatis, pellentesque risus imperdiet, bibendum eros. Nulla orci leo, congue id neque vitae, cursus dapibus lorem. Proin semper nibh vel aliquam tempus. Sed ac diam placerat, ornare erat a, ornare diam. Aliquam ac ex neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean condimentum arcu sit amet volutpat laoreet. In hac habitasse platea dictumst. Proin mattis lorem quis arcu vulputate, non maximus massa ultrices.

      Proin tincidunt quam sit amet imperdiet viverra. Morbi nec tortor at ipsum imperdiet convallis sed eu velit. Vivamus malesuada elit tortor, at ornare velit maximus vel. Quisque non nulla luctus tellus sollicitudin pharetra vitae interdum risus. Nullam nec tristique felis. In a interdum massa. Donec sollicitudin mollis quam, et lacinia lacus ultricies at. Nam malesuada pellentesque risus et sollicitudin. Morbi auctor nisl dui, sed sagittis odio accumsan sed. Duis luctus massa sit amet sem maximus vulputate.

      Donec vitae porttitor dui, ut porttitor urna. Duis aliquet velit finibus tristique gravida. Curabitur sollicitudin neque et velit mollis, sit amet pellentesque sapien porta. Fusce eu velit tincidunt, finibus purus at, laoreet orci. Donec imperdiet, mi quis laoreet placerat, lectus massa sollicitudin dui, id fermentum quam sem sit amet dolor. Mauris tempor, sapien nec finibus tincidunt, ipsum massa maximus nibh, et tincidunt nunc nulla dapibus risus. Duis iaculis augue eu velit vulputate sollicitudin vitae nec magna. Fusce finibus nec mauris pretium accumsan. Ut vestibulum libero accumsan, pretium neque sed, volutpat nunc. In volutpat pulvinar varius. Nam sed lacus vel risus auctor auctor. Fusce semper porttitor leo eget tincidunt. Aenean et nunc in tortor convallis pharetra vel non odio. Cras semper elit non libero euismod, ut congue leo molestie. Praesent id dui semper, tempor nisi pulvinar, ornare mi. Donec euismod aliquet nisi, at dictum lectus tempor consectetur.`,
    });

    artigos.push({
      id: 'preciso-de-ajuda-com-functions-em-javascript',
      titulo: 'Preciso de ajuda com Functions em JavaScript',
      likes: 3,
      comentarios: 11,
      username: 'maycony',
      horario: '20:01',
      data: '14/09/2024',
      texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, eros ut interdum euismod, augue diam commodo lectus, eget faucibus turpis nisl ut mi. Ut non placerat massa. Donec ullamcorper neque ut molestie pharetra. Pellentesque porta facilisis quam, et pulvinar elit luctus quis. Etiam tempor laoreet metus et blandit. Quisque vitae ex venenatis, pellentesque risus imperdiet, bibendum eros. Nulla orci leo, congue id neque vitae, cursus dapibus lorem. Proin semper nibh vel aliquam tempus. Sed ac diam placerat, ornare erat a, ornare diam. Aliquam ac ex neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean condimentum arcu sit amet volutpat laoreet. In hac habitasse platea dictumst. Proin mattis lorem quis arcu vulputate, non maximus massa ultrices.

      Proin tincidunt quam sit amet imperdiet viverra. Morbi nec tortor at ipsum imperdiet convallis sed eu velit. Vivamus malesuada elit tortor, at ornare velit maximus vel. Quisque non nulla luctus tellus sollicitudin pharetra vitae interdum risus. Nullam nec tristique felis. In a interdum massa. Donec sollicitudin mollis quam, et lacinia lacus ultricies at. Nam malesuada pellentesque risus et sollicitudin. Morbi auctor nisl dui, sed sagittis odio accumsan sed. Duis luctus massa sit amet sem maximus vulputate.

      Donec vitae porttitor dui, ut porttitor urna. Duis aliquet velit finibus tristique gravida. Curabitur sollicitudin neque et velit mollis, sit amet pellentesque sapien porta. Fusce eu velit tincidunt, finibus purus at, laoreet orci. Donec imperdiet, mi quis laoreet placerat, lectus massa sollicitudin dui, id fermentum quam sem sit amet dolor. Mauris tempor, sapien nec finibus tincidunt, ipsum massa maximus nibh, et tincidunt nunc nulla dapibus risus. Duis iaculis augue eu velit vulputate sollicitudin vitae nec magna. Fusce finibus nec mauris pretium accumsan. Ut vestibulum libero accumsan, pretium neque sed, volutpat nunc. In volutpat pulvinar varius. Nam sed lacus vel risus auctor auctor. Fusce semper porttitor leo eget tincidunt. Aenean et nunc in tortor convallis pharetra vel non odio. Cras semper elit non libero euismod, ut congue leo molestie. Praesent id dui semper, tempor nisi pulvinar, ornare mi. Donec euismod aliquet nisi, at dictum lectus tempor consectetur.`,
    });

    artigos.push({
      id: 'conselhos-para-me-ajudar-no-meu-projeto-pessoal',
      titulo: 'Conselhos para me ajudar no meu projeto pessoal.',
      likes: 5,
      comentarios: 1,
      username: 'ZambeliDev',
      horario: '20:07',
      data: '14/09/2024',
      texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, eros ut interdum euismod, augue diam commodo lectus, eget faucibus turpis nisl ut mi. Ut non placerat massa. Donec ullamcorper neque ut molestie pharetra. Pellentesque porta facilisis quam, et pulvinar elit luctus quis. Etiam tempor laoreet metus et blandit. Quisque vitae ex venenatis, pellentesque risus imperdiet, bibendum eros. Nulla orci leo, congue id neque vitae, cursus dapibus lorem. Proin semper nibh vel aliquam tempus. Sed ac diam placerat, ornare erat a, ornare diam. Aliquam ac ex neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean condimentum arcu sit amet volutpat laoreet. In hac habitasse platea dictumst. Proin mattis lorem quis arcu vulputate, non maximus massa ultrices.

      Proin tincidunt quam sit amet imperdiet viverra. Morbi nec tortor at ipsum imperdiet convallis sed eu velit. Vivamus malesuada elit tortor, at ornare velit maximus vel. Quisque non nulla luctus tellus sollicitudin pharetra vitae interdum risus. Nullam nec tristique felis. In a interdum massa. Donec sollicitudin mollis quam, et lacinia lacus ultricies at. Nam malesuada pellentesque risus et sollicitudin. Morbi auctor nisl dui, sed sagittis odio accumsan sed. Duis luctus massa sit amet sem maximus vulputate.

      Donec vitae porttitor dui, ut porttitor urna. Duis aliquet velit finibus tristique gravida. Curabitur sollicitudin neque et velit mollis, sit amet pellentesque sapien porta. Fusce eu velit tincidunt, finibus purus at, laoreet orci. Donec imperdiet, mi quis laoreet placerat, lectus massa sollicitudin dui, id fermentum quam sem sit amet dolor. Mauris tempor, sapien nec finibus tincidunt, ipsum massa maximus nibh, et tincidunt nunc nulla dapibus risus. Duis iaculis augue eu velit vulputate sollicitudin vitae nec magna. Fusce finibus nec mauris pretium accumsan. Ut vestibulum libero accumsan, pretium neque sed, volutpat nunc. In volutpat pulvinar varius. Nam sed lacus vel risus auctor auctor. Fusce semper porttitor leo eget tincidunt. Aenean et nunc in tortor convallis pharetra vel non odio. Cras semper elit non libero euismod, ut congue leo molestie. Praesent id dui semper, tempor nisi pulvinar, ornare mi. Donec euismod aliquet nisi, at dictum lectus tempor consectetur.`,
    });

    artigos.push({
      id: 'como-eu-explicaria-protocolos-para-uma-crianca-de-12-anos!',
      titulo: 'Como eu explicaria protocolos para uma criança de 12 anos!',
      likes: 4,
      comentarios: 1,
      username: 'ojonatasquirino',
      horario: '20:03',
      data: '14/09/2024',
      texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, eros ut interdum euismod, augue diam commodo lectus, eget faucibus turpis nisl ut mi. Ut non placerat massa. Donec ullamcorper neque ut molestie pharetra. Pellentesque porta facilisis quam, et pulvinar elit luctus quis. Etiam tempor laoreet metus et blandit. Quisque vitae ex venenatis, pellentesque risus imperdiet, bibendum eros. Nulla orci leo, congue id neque vitae, cursus dapibus lorem. Proin semper nibh vel aliquam tempus. Sed ac diam placerat, ornare erat a, ornare diam. Aliquam ac ex neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean condimentum arcu sit amet volutpat laoreet. In hac habitasse platea dictumst. Proin mattis lorem quis arcu vulputate, non maximus massa ultrices.

      Proin tincidunt quam sit amet imperdiet viverra. Morbi nec tortor at ipsum imperdiet convallis sed eu velit. Vivamus malesuada elit tortor, at ornare velit maximus vel. Quisque non nulla luctus tellus sollicitudin pharetra vitae interdum risus. Nullam nec tristique felis. In a interdum massa. Donec sollicitudin mollis quam, et lacinia lacus ultricies at. Nam malesuada pellentesque risus et sollicitudin. Morbi auctor nisl dui, sed sagittis odio accumsan sed. Duis luctus massa sit amet sem maximus vulputate.

      Donec vitae porttitor dui, ut porttitor urna. Duis aliquet velit finibus tristique gravida. Curabitur sollicitudin neque et velit mollis, sit amet pellentesque sapien porta. Fusce eu velit tincidunt, finibus purus at, laoreet orci. Donec imperdiet, mi quis laoreet placerat, lectus massa sollicitudin dui, id fermentum quam sem sit amet dolor. Mauris tempor, sapien nec finibus tincidunt, ipsum massa maximus nibh, et tincidunt nunc nulla dapibus risus. Duis iaculis augue eu velit vulputate sollicitudin vitae nec magna. Fusce finibus nec mauris pretium accumsan. Ut vestibulum libero accumsan, pretium neque sed, volutpat nunc. In volutpat pulvinar varius. Nam sed lacus vel risus auctor auctor. Fusce semper porttitor leo eget tincidunt. Aenean et nunc in tortor convallis pharetra vel non odio. Cras semper elit non libero euismod, ut congue leo molestie. Praesent id dui semper, tempor nisi pulvinar, ornare mi. Donec euismod aliquet nisi, at dictum lectus tempor consectetur.`,
    });

    artigos.push({
      id: 'tutorial-de-como-criar-uma-rotina-de-login-com-nodejs-mysql-passaport-e-handlebars',
      titulo:
        'Tutorial de como criar uma rotina de LOGIN com Nodejs, Mysql, Passaport e Handlebars',
      likes: 4,
      comentarios: 1,
      username: 'Sabalozua18',
      horario: '20:06',
      data: '14/09/2024',
      texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, eros ut interdum euismod, augue diam commodo lectus, eget faucibus turpis nisl ut mi. Ut non placerat massa. Donec ullamcorper neque ut molestie pharetra. Pellentesque porta facilisis quam, et pulvinar elit luctus quis. Etiam tempor laoreet metus et blandit. Quisque vitae ex venenatis, pellentesque risus imperdiet, bibendum eros. Nulla orci leo, congue id neque vitae, cursus dapibus lorem. Proin semper nibh vel aliquam tempus. Sed ac diam placerat, ornare erat a, ornare diam. Aliquam ac ex neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean condimentum arcu sit amet volutpat laoreet. In hac habitasse platea dictumst. Proin mattis lorem quis arcu vulputate, non maximus massa ultrices.

      Proin tincidunt quam sit amet imperdiet viverra. Morbi nec tortor at ipsum imperdiet convallis sed eu velit. Vivamus malesuada elit tortor, at ornare velit maximus vel. Quisque non nulla luctus tellus sollicitudin pharetra vitae interdum risus. Nullam nec tristique felis. In a interdum massa. Donec sollicitudin mollis quam, et lacinia lacus ultricies at. Nam malesuada pellentesque risus et sollicitudin. Morbi auctor nisl dui, sed sagittis odio accumsan sed. Duis luctus massa sit amet sem maximus vulputate.

      Donec vitae porttitor dui, ut porttitor urna. Duis aliquet velit finibus tristique gravida. Curabitur sollicitudin neque et velit mollis, sit amet pellentesque sapien porta. Fusce eu velit tincidunt, finibus purus at, laoreet orci. Donec imperdiet, mi quis laoreet placerat, lectus massa sollicitudin dui, id fermentum quam sem sit amet dolor. Mauris tempor, sapien nec finibus tincidunt, ipsum massa maximus nibh, et tincidunt nunc nulla dapibus risus. Duis iaculis augue eu velit vulputate sollicitudin vitae nec magna. Fusce finibus nec mauris pretium accumsan. Ut vestibulum libero accumsan, pretium neque sed, volutpat nunc. In volutpat pulvinar varius. Nam sed lacus vel risus auctor auctor. Fusce semper porttitor leo eget tincidunt. Aenean et nunc in tortor convallis pharetra vel non odio. Cras semper elit non libero euismod, ut congue leo molestie. Praesent id dui semper, tempor nisi pulvinar, ornare mi. Donec euismod aliquet nisi, at dictum lectus tempor consectetur.`,
    });

    artigos.push({
      id: 'vagas-fecham-antes-de-eu-chegar-na-entrevista',
      titulo: 'Vagas fecham antes de eu chegar na entrevista',
      likes: 4,
      comentarios: 0,
      username: 'Anderson',
      horario: '20:06',
      data: '14/09/2024',
      texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, eros ut interdum euismod, augue diam commodo lectus, eget faucibus turpis nisl ut mi. Ut non placerat massa. Donec ullamcorper neque ut molestie pharetra. Pellentesque porta facilisis quam, et pulvinar elit luctus quis. Etiam tempor laoreet metus et blandit. Quisque vitae ex venenatis, pellentesque risus imperdiet, bibendum eros. Nulla orci leo, congue id neque vitae, cursus dapibus lorem. Proin semper nibh vel aliquam tempus. Sed ac diam placerat, ornare erat a, ornare diam. Aliquam ac ex neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean condimentum arcu sit amet volutpat laoreet. In hac habitasse platea dictumst. Proin mattis lorem quis arcu vulputate, non maximus massa ultrices.

      Proin tincidunt quam sit amet imperdiet viverra. Morbi nec tortor at ipsum imperdiet convallis sed eu velit. Vivamus malesuada elit tortor, at ornare velit maximus vel. Quisque non nulla luctus tellus sollicitudin pharetra vitae interdum risus. Nullam nec tristique felis. In a interdum massa. Donec sollicitudin mollis quam, et lacinia lacus ultricies at. Nam malesuada pellentesque risus et sollicitudin. Morbi auctor nisl dui, sed sagittis odio accumsan sed. Duis luctus massa sit amet sem maximus vulputate.

      Donec vitae porttitor dui, ut porttitor urna. Duis aliquet velit finibus tristique gravida. Curabitur sollicitudin neque et velit mollis, sit amet pellentesque sapien porta. Fusce eu velit tincidunt, finibus purus at, laoreet orci. Donec imperdiet, mi quis laoreet placerat, lectus massa sollicitudin dui, id fermentum quam sem sit amet dolor. Mauris tempor, sapien nec finibus tincidunt, ipsum massa maximus nibh, et tincidunt nunc nulla dapibus risus. Duis iaculis augue eu velit vulputate sollicitudin vitae nec magna. Fusce finibus nec mauris pretium accumsan. Ut vestibulum libero accumsan, pretium neque sed, volutpat nunc. In volutpat pulvinar varius. Nam sed lacus vel risus auctor auctor. Fusce semper porttitor leo eget tincidunt. Aenean et nunc in tortor convallis pharetra vel non odio. Cras semper elit non libero euismod, ut congue leo molestie. Praesent id dui semper, tempor nisi pulvinar, ornare mi. Donec euismod aliquet nisi, at dictum lectus tempor consectetur.`,
    });

    artigos.push({
      id: 'o-que-tem-sido-debatido-no-tabnews-02-09-2024-08-09-2024',
      titulo: 'O que tem sido debatido no TabNews? (02/09/2024 - 08/09/2024)',
      likes: 3,
      comentarios: 0,
      username: 'luishjacinto',
      horario: '20:09',
      data: '14/09/2024',
      texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, eros ut interdum euismod, augue diam commodo lectus, eget faucibus turpis nisl ut mi. Ut non placerat massa. Donec ullamcorper neque ut molestie pharetra. Pellentesque porta facilisis quam, et pulvinar elit luctus quis. Etiam tempor laoreet metus et blandit. Quisque vitae ex venenatis, pellentesque risus imperdiet, bibendum eros. Nulla orci leo, congue id neque vitae, cursus dapibus lorem. Proin semper nibh vel aliquam tempus. Sed ac diam placerat, ornare erat a, ornare diam. Aliquam ac ex neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean condimentum arcu sit amet volutpat laoreet. In hac habitasse platea dictumst. Proin mattis lorem quis arcu vulputate, non maximus massa ultrices.

      Proin tincidunt quam sit amet imperdiet viverra. Morbi nec tortor at ipsum imperdiet convallis sed eu velit. Vivamus malesuada elit tortor, at ornare velit maximus vel. Quisque non nulla luctus tellus sollicitudin pharetra vitae interdum risus. Nullam nec tristique felis. In a interdum massa. Donec sollicitudin mollis quam, et lacinia lacus ultricies at. Nam malesuada pellentesque risus et sollicitudin. Morbi auctor nisl dui, sed sagittis odio accumsan sed. Duis luctus massa sit amet sem maximus vulputate.

      Donec vitae porttitor dui, ut porttitor urna. Duis aliquet velit finibus tristique gravida. Curabitur sollicitudin neque et velit mollis, sit amet pellentesque sapien porta. Fusce eu velit tincidunt, finibus purus at, laoreet orci. Donec imperdiet, mi quis laoreet placerat, lectus massa sollicitudin dui, id fermentum quam sem sit amet dolor. Mauris tempor, sapien nec finibus tincidunt, ipsum massa maximus nibh, et tincidunt nunc nulla dapibus risus. Duis iaculis augue eu velit vulputate sollicitudin vitae nec magna. Fusce finibus nec mauris pretium accumsan. Ut vestibulum libero accumsan, pretium neque sed, volutpat nunc. In volutpat pulvinar varius. Nam sed lacus vel risus auctor auctor. Fusce semper porttitor leo eget tincidunt. Aenean et nunc in tortor convallis pharetra vel non odio. Cras semper elit non libero euismod, ut congue leo molestie. Praesent id dui semper, tempor nisi pulvinar, ornare mi. Donec euismod aliquet nisi, at dictum lectus tempor consectetur.`,
    });

    artigos.push({
      id: 'recomendacao-de-livros',
      titulo: 'Recomendação de livros',
      likes: 2,
      comentarios: 1,
      username: 'Vradimmir',
      horario: '20:02',
      data: '14/09/2024',
      texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, eros ut interdum euismod, augue diam commodo lectus, eget faucibus turpis nisl ut mi. Ut non placerat massa. Donec ullamcorper neque ut molestie pharetra. Pellentesque porta facilisis quam, et pulvinar elit luctus quis. Etiam tempor laoreet metus et blandit. Quisque vitae ex venenatis, pellentesque risus imperdiet, bibendum eros. Nulla orci leo, congue id neque vitae, cursus dapibus lorem. Proin semper nibh vel aliquam tempus. Sed ac diam placerat, ornare erat a, ornare diam. Aliquam ac ex neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean condimentum arcu sit amet volutpat laoreet. In hac habitasse platea dictumst. Proin mattis lorem quis arcu vulputate, non maximus massa ultrices.

      Proin tincidunt quam sit amet imperdiet viverra. Morbi nec tortor at ipsum imperdiet convallis sed eu velit. Vivamus malesuada elit tortor, at ornare velit maximus vel. Quisque non nulla luctus tellus sollicitudin pharetra vitae interdum risus. Nullam nec tristique felis. In a interdum massa. Donec sollicitudin mollis quam, et lacinia lacus ultricies at. Nam malesuada pellentesque risus et sollicitudin. Morbi auctor nisl dui, sed sagittis odio accumsan sed. Duis luctus massa sit amet sem maximus vulputate.

      Donec vitae porttitor dui, ut porttitor urna. Duis aliquet velit finibus tristique gravida. Curabitur sollicitudin neque et velit mollis, sit amet pellentesque sapien porta. Fusce eu velit tincidunt, finibus purus at, laoreet orci. Donec imperdiet, mi quis laoreet placerat, lectus massa sollicitudin dui, id fermentum quam sem sit amet dolor. Mauris tempor, sapien nec finibus tincidunt, ipsum massa maximus nibh, et tincidunt nunc nulla dapibus risus. Duis iaculis augue eu velit vulputate sollicitudin vitae nec magna. Fusce finibus nec mauris pretium accumsan. Ut vestibulum libero accumsan, pretium neque sed, volutpat nunc. In volutpat pulvinar varius. Nam sed lacus vel risus auctor auctor. Fusce semper porttitor leo eget tincidunt. Aenean et nunc in tortor convallis pharetra vel non odio. Cras semper elit non libero euismod, ut congue leo molestie. Praesent id dui semper, tempor nisi pulvinar, ornare mi. Donec euismod aliquet nisi, at dictum lectus tempor consectetur.`,
    });

    artigos.push({
      id: 'duvida-o-que-responder-quando-te-perguntarem-qual-voce-cobra-por-hora',
      titulo:
        'Dúvida: O que responder quando te perguntarem: "Qual você cobra por hora?"',
      likes: 4,
      comentarios: 3,
      username: 'gabrielduete',
      horario: '20:03',
      data: '14/09/2024',
      texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, eros ut interdum euismod, augue diam commodo lectus, eget faucibus turpis nisl ut mi. Ut non placerat massa. Donec ullamcorper neque ut molestie pharetra. Pellentesque porta facilisis quam, et pulvinar elit luctus quis. Etiam tempor laoreet metus et blandit. Quisque vitae ex venenatis, pellentesque risus imperdiet, bibendum eros. Nulla orci leo, congue id neque vitae, cursus dapibus lorem. Proin semper nibh vel aliquam tempus. Sed ac diam placerat, ornare erat a, ornare diam. Aliquam ac ex neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean condimentum arcu sit amet volutpat laoreet. In hac habitasse platea dictumst. Proin mattis lorem quis arcu vulputate, non maximus massa ultrices.

      Proin tincidunt quam sit amet imperdiet viverra. Morbi nec tortor at ipsum imperdiet convallis sed eu velit. Vivamus malesuada elit tortor, at ornare velit maximus vel. Quisque non nulla luctus tellus sollicitudin pharetra vitae interdum risus. Nullam nec tristique felis. In a interdum massa. Donec sollicitudin mollis quam, et lacinia lacus ultricies at. Nam malesuada pellentesque risus et sollicitudin. Morbi auctor nisl dui, sed sagittis odio accumsan sed. Duis luctus massa sit amet sem maximus vulputate.

      Donec vitae porttitor dui, ut porttitor urna. Duis aliquet velit finibus tristique gravida. Curabitur sollicitudin neque et velit mollis, sit amet pellentesque sapien porta. Fusce eu velit tincidunt, finibus purus at, laoreet orci. Donec imperdiet, mi quis laoreet placerat, lectus massa sollicitudin dui, id fermentum quam sem sit amet dolor. Mauris tempor, sapien nec finibus tincidunt, ipsum massa maximus nibh, et tincidunt nunc nulla dapibus risus. Duis iaculis augue eu velit vulputate sollicitudin vitae nec magna. Fusce finibus nec mauris pretium accumsan. Ut vestibulum libero accumsan, pretium neque sed, volutpat nunc. In volutpat pulvinar varius. Nam sed lacus vel risus auctor auctor. Fusce semper porttitor leo eget tincidunt. Aenean et nunc in tortor convallis pharetra vel non odio. Cras semper elit non libero euismod, ut congue leo molestie. Praesent id dui semper, tempor nisi pulvinar, ornare mi. Donec euismod aliquet nisi, at dictum lectus tempor consectetur.`,
    });

    artigos.push({
      id: 'dando-mais-moral-para-nossos-colegas-designers',
      titulo: 'Dando mais moral para nossos colegas designers',
      likes: 4,
      comentarios: 0,
      username: 'gabrielduete',
      horario: '20:03',
      data: '14/09/2024',
      texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, eros ut interdum euismod, augue diam commodo lectus, eget faucibus turpis nisl ut mi. Ut non placerat massa. Donec ullamcorper neque ut molestie pharetra. Pellentesque porta facilisis quam, et pulvinar elit luctus quis. Etiam tempor laoreet metus et blandit. Quisque vitae ex venenatis, pellentesque risus imperdiet, bibendum eros. Nulla orci leo, congue id neque vitae, cursus dapibus lorem. Proin semper nibh vel aliquam tempus. Sed ac diam placerat, ornare erat a, ornare diam. Aliquam ac ex neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean condimentum arcu sit amet volutpat laoreet. In hac habitasse platea dictumst. Proin mattis lorem quis arcu vulputate, non maximus massa ultrices.

      Proin tincidunt quam sit amet imperdiet viverra. Morbi nec tortor at ipsum imperdiet convallis sed eu velit. Vivamus malesuada elit tortor, at ornare velit maximus vel. Quisque non nulla luctus tellus sollicitudin pharetra vitae interdum risus. Nullam nec tristique felis. In a interdum massa. Donec sollicitudin mollis quam, et lacinia lacus ultricies at. Nam malesuada pellentesque risus et sollicitudin. Morbi auctor nisl dui, sed sagittis odio accumsan sed. Duis luctus massa sit amet sem maximus vulputate.

      Donec vitae porttitor dui, ut porttitor urna. Duis aliquet velit finibus tristique gravida. Curabitur sollicitudin neque et velit mollis, sit amet pellentesque sapien porta. Fusce eu velit tincidunt, finibus purus at, laoreet orci. Donec imperdiet, mi quis laoreet placerat, lectus massa sollicitudin dui, id fermentum quam sem sit amet dolor. Mauris tempor, sapien nec finibus tincidunt, ipsum massa maximus nibh, et tincidunt nunc nulla dapibus risus. Duis iaculis augue eu velit vulputate sollicitudin vitae nec magna. Fusce finibus nec mauris pretium accumsan. Ut vestibulum libero accumsan, pretium neque sed, volutpat nunc. In volutpat pulvinar varius. Nam sed lacus vel risus auctor auctor. Fusce semper porttitor leo eget tincidunt. Aenean et nunc in tortor convallis pharetra vel non odio. Cras semper elit non libero euismod, ut congue leo molestie. Praesent id dui semper, tempor nisi pulvinar, ornare mi. Donec euismod aliquet nisi, at dictum lectus tempor consectetur.`,
    });

    artigos.push({
      id: 'faturei-50k-com-meu-produto-para-surpreender-minha-namorada',
      titulo: 'Faturei 50k com meu produto para surpreender minha namorada',
      likes: 66,
      comentarios: 18,
      username: 'andreeliasdev',
      horario: '20:04',
      data: '14/09/2024',
      texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, eros ut interdum euismod, augue diam commodo lectus, eget faucibus turpis nisl ut mi. Ut non placerat massa. Donec ullamcorper neque ut molestie pharetra. Pellentesque porta facilisis quam, et pulvinar elit luctus quis. Etiam tempor laoreet metus et blandit. Quisque vitae ex venenatis, pellentesque risus imperdiet, bibendum eros. Nulla orci leo, congue id neque vitae, cursus dapibus lorem. Proin semper nibh vel aliquam tempus. Sed ac diam placerat, ornare erat a, ornare diam. Aliquam ac ex neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean condimentum arcu sit amet volutpat laoreet. In hac habitasse platea dictumst. Proin mattis lorem quis arcu vulputate, non maximus massa ultrices.

      Proin tincidunt quam sit amet imperdiet viverra. Morbi nec tortor at ipsum imperdiet convallis sed eu velit. Vivamus malesuada elit tortor, at ornare velit maximus vel. Quisque non nulla luctus tellus sollicitudin pharetra vitae interdum risus. Nullam nec tristique felis. In a interdum massa. Donec sollicitudin mollis quam, et lacinia lacus ultricies at. Nam malesuada pellentesque risus et sollicitudin. Morbi auctor nisl dui, sed sagittis odio accumsan sed. Duis luctus massa sit amet sem maximus vulputate.

      Donec vitae porttitor dui, ut porttitor urna. Duis aliquet velit finibus tristique gravida. Curabitur sollicitudin neque et velit mollis, sit amet pellentesque sapien porta. Fusce eu velit tincidunt, finibus purus at, laoreet orci. Donec imperdiet, mi quis laoreet placerat, lectus massa sollicitudin dui, id fermentum quam sem sit amet dolor. Mauris tempor, sapien nec finibus tincidunt, ipsum massa maximus nibh, et tincidunt nunc nulla dapibus risus. Duis iaculis augue eu velit vulputate sollicitudin vitae nec magna. Fusce finibus nec mauris pretium accumsan. Ut vestibulum libero accumsan, pretium neque sed, volutpat nunc. In volutpat pulvinar varius. Nam sed lacus vel risus auctor auctor. Fusce semper porttitor leo eget tincidunt. Aenean et nunc in tortor convallis pharetra vel non odio. Cras semper elit non libero euismod, ut congue leo molestie. Praesent id dui semper, tempor nisi pulvinar, ornare mi. Donec euismod aliquet nisi, at dictum lectus tempor consectetur.`,
    });

    artigos.push({
      id: 'o-verdadeiro-custo-do-armazenamento-gratuito',
      titulo: 'O Verdadeiro Custo do “Armazenamento Gratuito”',
      likes: 46,
      comentarios: 1,
      username: '0xtny',
      horario: '20:07',
      data: '14/09/2024',
      texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, eros ut interdum euismod, augue diam commodo lectus, eget faucibus turpis nisl ut mi. Ut non placerat massa. Donec ullamcorper neque ut molestie pharetra. Pellentesque porta facilisis quam, et pulvinar elit luctus quis. Etiam tempor laoreet metus et blandit. Quisque vitae ex venenatis, pellentesque risus imperdiet, bibendum eros. Nulla orci leo, congue id neque vitae, cursus dapibus lorem. Proin semper nibh vel aliquam tempus. Sed ac diam placerat, ornare erat a, ornare diam. Aliquam ac ex neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean condimentum arcu sit amet volutpat laoreet. In hac habitasse platea dictumst. Proin mattis lorem quis arcu vulputate, non maximus massa ultrices.

      Proin tincidunt quam sit amet imperdiet viverra. Morbi nec tortor at ipsum imperdiet convallis sed eu velit. Vivamus malesuada elit tortor, at ornare velit maximus vel. Quisque non nulla luctus tellus sollicitudin pharetra vitae interdum risus. Nullam nec tristique felis. In a interdum massa. Donec sollicitudin mollis quam, et lacinia lacus ultricies at. Nam malesuada pellentesque risus et sollicitudin. Morbi auctor nisl dui, sed sagittis odio accumsan sed. Duis luctus massa sit amet sem maximus vulputate.

      Donec vitae porttitor dui, ut porttitor urna. Duis aliquet velit finibus tristique gravida. Curabitur sollicitudin neque et velit mollis, sit amet pellentesque sapien porta. Fusce eu velit tincidunt, finibus purus at, laoreet orci. Donec imperdiet, mi quis laoreet placerat, lectus massa sollicitudin dui, id fermentum quam sem sit amet dolor. Mauris tempor, sapien nec finibus tincidunt, ipsum massa maximus nibh, et tincidunt nunc nulla dapibus risus. Duis iaculis augue eu velit vulputate sollicitudin vitae nec magna. Fusce finibus nec mauris pretium accumsan. Ut vestibulum libero accumsan, pretium neque sed, volutpat nunc. In volutpat pulvinar varius. Nam sed lacus vel risus auctor auctor. Fusce semper porttitor leo eget tincidunt. Aenean et nunc in tortor convallis pharetra vel non odio. Cras semper elit non libero euismod, ut congue leo molestie. Praesent id dui semper, tempor nisi pulvinar, ornare mi. Donec euismod aliquet nisi, at dictum lectus tempor consectetur.`,
    });

    artigos.push({
      id: 'pitch:-conheca-o-site-jogos-em-promocoes-mvp-finalizado',
      titulo: 'Pitch: Conheça o site Jogos em promoções (MVP Finalizado).',
      likes: 27,
      comentarios: 24,
      username: 'saraiva',
      horario: '20:06',
      data: '14/09/2024',
      texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, eros ut interdum euismod, augue diam commodo lectus, eget faucibus turpis nisl ut mi. Ut non placerat massa. Donec ullamcorper neque ut molestie pharetra. Pellentesque porta facilisis quam, et pulvinar elit luctus quis. Etiam tempor laoreet metus et blandit. Quisque vitae ex venenatis, pellentesque risus imperdiet, bibendum eros. Nulla orci leo, congue id neque vitae, cursus dapibus lorem. Proin semper nibh vel aliquam tempus. Sed ac diam placerat, ornare erat a, ornare diam. Aliquam ac ex neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean condimentum arcu sit amet volutpat laoreet. In hac habitasse platea dictumst. Proin mattis lorem quis arcu vulputate, non maximus massa ultrices.

      Proin tincidunt quam sit amet imperdiet viverra. Morbi nec tortor at ipsum imperdiet convallis sed eu velit. Vivamus malesuada elit tortor, at ornare velit maximus vel. Quisque non nulla luctus tellus sollicitudin pharetra vitae interdum risus. Nullam nec tristique felis. In a interdum massa. Donec sollicitudin mollis quam, et lacinia lacus ultricies at. Nam malesuada pellentesque risus et sollicitudin. Morbi auctor nisl dui, sed sagittis odio accumsan sed. Duis luctus massa sit amet sem maximus vulputate.

      Donec vitae porttitor dui, ut porttitor urna. Duis aliquet velit finibus tristique gravida. Curabitur sollicitudin neque et velit mollis, sit amet pellentesque sapien porta. Fusce eu velit tincidunt, finibus purus at, laoreet orci. Donec imperdiet, mi quis laoreet placerat, lectus massa sollicitudin dui, id fermentum quam sem sit amet dolor. Mauris tempor, sapien nec finibus tincidunt, ipsum massa maximus nibh, et tincidunt nunc nulla dapibus risus. Duis iaculis augue eu velit vulputate sollicitudin vitae nec magna. Fusce finibus nec mauris pretium accumsan. Ut vestibulum libero accumsan, pretium neque sed, volutpat nunc. In volutpat pulvinar varius. Nam sed lacus vel risus auctor auctor. Fusce semper porttitor leo eget tincidunt. Aenean et nunc in tortor convallis pharetra vel non odio. Cras semper elit non libero euismod, ut congue leo molestie. Praesent id dui semper, tempor nisi pulvinar, ornare mi. Donec euismod aliquet nisi, at dictum lectus tempor consectetur.`,
    });

    artigos.push({
      id: 'principais-comandos-perigosos-em-linux',
      titulo: 'Principais comandos perigosos em Linux',
      likes: 26,
      comentarios: 8,
      username: 'JeielLimaMiranda',
      horario: '20:05',
      data: '14/09/2024',
      texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, eros ut interdum euismod, augue diam commodo lectus, eget faucibus turpis nisl ut mi. Ut non placerat massa. Donec ullamcorper neque ut molestie pharetra. Pellentesque porta facilisis quam, et pulvinar elit luctus quis. Etiam tempor laoreet metus et blandit. Quisque vitae ex venenatis, pellentesque risus imperdiet, bibendum eros. Nulla orci leo, congue id neque vitae, cursus dapibus lorem. Proin semper nibh vel aliquam tempus. Sed ac diam placerat, ornare erat a, ornare diam. Aliquam ac ex neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean condimentum arcu sit amet volutpat laoreet. In hac habitasse platea dictumst. Proin mattis lorem quis arcu vulputate, non maximus massa ultrices.

      Proin tincidunt quam sit amet imperdiet viverra. Morbi nec tortor at ipsum imperdiet convallis sed eu velit. Vivamus malesuada elit tortor, at ornare velit maximus vel. Quisque non nulla luctus tellus sollicitudin pharetra vitae interdum risus. Nullam nec tristique felis. In a interdum massa. Donec sollicitudin mollis quam, et lacinia lacus ultricies at. Nam malesuada pellentesque risus et sollicitudin. Morbi auctor nisl dui, sed sagittis odio accumsan sed. Duis luctus massa sit amet sem maximus vulputate.

      Donec vitae porttitor dui, ut porttitor urna. Duis aliquet velit finibus tristique gravida. Curabitur sollicitudin neque et velit mollis, sit amet pellentesque sapien porta. Fusce eu velit tincidunt, finibus purus at, laoreet orci. Donec imperdiet, mi quis laoreet placerat, lectus massa sollicitudin dui, id fermentum quam sem sit amet dolor. Mauris tempor, sapien nec finibus tincidunt, ipsum massa maximus nibh, et tincidunt nunc nulla dapibus risus. Duis iaculis augue eu velit vulputate sollicitudin vitae nec magna. Fusce finibus nec mauris pretium accumsan. Ut vestibulum libero accumsan, pretium neque sed, volutpat nunc. In volutpat pulvinar varius. Nam sed lacus vel risus auctor auctor. Fusce semper porttitor leo eget tincidunt. Aenean et nunc in tortor convallis pharetra vel non odio. Cras semper elit non libero euismod, ut congue leo molestie. Praesent id dui semper, tempor nisi pulvinar, ornare mi. Donec euismod aliquet nisi, at dictum lectus tempor consectetur.`,
    });

    artigos.push({
      id: 'meu-caminho-ate-a-minha-primeira-venda',
      titulo: 'Meu caminho até a minha primeira venda',
      likes: 18,
      comentarios: 9,
      username: 'santigonzaga',
      horario: '20:05',
      data: '14/09/2024',
      texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, eros ut interdum euismod, augue diam commodo lectus, eget faucibus turpis nisl ut mi. Ut non placerat massa. Donec ullamcorper neque ut molestie pharetra. Pellentesque porta facilisis quam, et pulvinar elit luctus quis. Etiam tempor laoreet metus et blandit. Quisque vitae ex venenatis, pellentesque risus imperdiet, bibendum eros. Nulla orci leo, congue id neque vitae, cursus dapibus lorem. Proin semper nibh vel aliquam tempus. Sed ac diam placerat, ornare erat a, ornare diam. Aliquam ac ex neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean condimentum arcu sit amet volutpat laoreet. In hac habitasse platea dictumst. Proin mattis lorem quis arcu vulputate, non maximus massa ultrices.

      Proin tincidunt quam sit amet imperdiet viverra. Morbi nec tortor at ipsum imperdiet convallis sed eu velit. Vivamus malesuada elit tortor, at ornare velit maximus vel. Quisque non nulla luctus tellus sollicitudin pharetra vitae interdum risus. Nullam nec tristique felis. In a interdum massa. Donec sollicitudin mollis quam, et lacinia lacus ultricies at. Nam malesuada pellentesque risus et sollicitudin. Morbi auctor nisl dui, sed sagittis odio accumsan sed. Duis luctus massa sit amet sem maximus vulputate.

      Donec vitae porttitor dui, ut porttitor urna. Duis aliquet velit finibus tristique gravida. Curabitur sollicitudin neque et velit mollis, sit amet pellentesque sapien porta. Fusce eu velit tincidunt, finibus purus at, laoreet orci. Donec imperdiet, mi quis laoreet placerat, lectus massa sollicitudin dui, id fermentum quam sem sit amet dolor. Mauris tempor, sapien nec finibus tincidunt, ipsum massa maximus nibh, et tincidunt nunc nulla dapibus risus. Duis iaculis augue eu velit vulputate sollicitudin vitae nec magna. Fusce finibus nec mauris pretium accumsan. Ut vestibulum libero accumsan, pretium neque sed, volutpat nunc. In volutpat pulvinar varius. Nam sed lacus vel risus auctor auctor. Fusce semper porttitor leo eget tincidunt. Aenean et nunc in tortor convallis pharetra vel non odio. Cras semper elit non libero euismod, ut congue leo molestie. Praesent id dui semper, tempor nisi pulvinar, ornare mi. Donec euismod aliquet nisi, at dictum lectus tempor consectetur.`,
    });

    artigos.push({
      id: 'tenho-muitas-responsabilidades-e-nao-recebo-metade-do-valor-monetario-que-seria-adequado.',
      titulo:
        'Tenho muitas responsabilidades e não recebo metade do valor monetário que seria adequado.',
      likes: 14,
      comentarios: 9,
      username: 'umProgramadorCansado',
      horario: '20:04',
      data: '14/09/2024',
      texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, eros ut interdum euismod, augue diam commodo lectus, eget faucibus turpis nisl ut mi. Ut non placerat massa. Donec ullamcorper neque ut molestie pharetra. Pellentesque porta facilisis quam, et pulvinar elit luctus quis. Etiam tempor laoreet metus et blandit. Quisque vitae ex venenatis, pellentesque risus imperdiet, bibendum eros. Nulla orci leo, congue id neque vitae, cursus dapibus lorem. Proin semper nibh vel aliquam tempus. Sed ac diam placerat, ornare erat a, ornare diam. Aliquam ac ex neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean condimentum arcu sit amet volutpat laoreet. In hac habitasse platea dictumst. Proin mattis lorem quis arcu vulputate, non maximus massa ultrices.

      Proin tincidunt quam sit amet imperdiet viverra. Morbi nec tortor at ipsum imperdiet convallis sed eu velit. Vivamus malesuada elit tortor, at ornare velit maximus vel. Quisque non nulla luctus tellus sollicitudin pharetra vitae interdum risus. Nullam nec tristique felis. In a interdum massa. Donec sollicitudin mollis quam, et lacinia lacus ultricies at. Nam malesuada pellentesque risus et sollicitudin. Morbi auctor nisl dui, sed sagittis odio accumsan sed. Duis luctus massa sit amet sem maximus vulputate.

      Donec vitae porttitor dui, ut porttitor urna. Duis aliquet velit finibus tristique gravida. Curabitur sollicitudin neque et velit mollis, sit amet pellentesque sapien porta. Fusce eu velit tincidunt, finibus purus at, laoreet orci. Donec imperdiet, mi quis laoreet placerat, lectus massa sollicitudin dui, id fermentum quam sem sit amet dolor. Mauris tempor, sapien nec finibus tincidunt, ipsum massa maximus nibh, et tincidunt nunc nulla dapibus risus. Duis iaculis augue eu velit vulputate sollicitudin vitae nec magna. Fusce finibus nec mauris pretium accumsan. Ut vestibulum libero accumsan, pretium neque sed, volutpat nunc. In volutpat pulvinar varius. Nam sed lacus vel risus auctor auctor. Fusce semper porttitor leo eget tincidunt. Aenean et nunc in tortor convallis pharetra vel non odio. Cras semper elit non libero euismod, ut congue leo molestie. Praesent id dui semper, tempor nisi pulvinar, ornare mi. Donec euismod aliquet nisi, at dictum lectus tempor consectetur.`,
    });

    artigos.push({
      id: 'demotivator-ai-plataforma-para-gerar-citacoes-engracadas-como-um-coach',
      titulo:
        'Demotivator AI - Plataforma para gerar citações engraçadas como um coach "desmotivacional"',
      likes: 14,
      comentarios: 11,
      username: 'hermogenes',
      horario: '20:05',
      data: '14/09/2024',
      texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, eros ut interdum euismod, augue diam commodo lectus, eget faucibus turpis nisl ut mi. Ut non placerat massa. Donec ullamcorper neque ut molestie pharetra. Pellentesque porta facilisis quam, et pulvinar elit luctus quis. Etiam tempor laoreet metus et blandit. Quisque vitae ex venenatis, pellentesque risus imperdiet, bibendum eros. Nulla orci leo, congue id neque vitae, cursus dapibus lorem. Proin semper nibh vel aliquam tempus. Sed ac diam placerat, ornare erat a, ornare diam. Aliquam ac ex neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean condimentum arcu sit amet volutpat laoreet. In hac habitasse platea dictumst. Proin mattis lorem quis arcu vulputate, non maximus massa ultrices.

      Proin tincidunt quam sit amet imperdiet viverra. Morbi nec tortor at ipsum imperdiet convallis sed eu velit. Vivamus malesuada elit tortor, at ornare velit maximus vel. Quisque non nulla luctus tellus sollicitudin pharetra vitae interdum risus. Nullam nec tristique felis. In a interdum massa. Donec sollicitudin mollis quam, et lacinia lacus ultricies at. Nam malesuada pellentesque risus et sollicitudin. Morbi auctor nisl dui, sed sagittis odio accumsan sed. Duis luctus massa sit amet sem maximus vulputate.

      Donec vitae porttitor dui, ut porttitor urna. Duis aliquet velit finibus tristique gravida. Curabitur sollicitudin neque et velit mollis, sit amet pellentesque sapien porta. Fusce eu velit tincidunt, finibus purus at, laoreet orci. Donec imperdiet, mi quis laoreet placerat, lectus massa sollicitudin dui, id fermentum quam sem sit amet dolor. Mauris tempor, sapien nec finibus tincidunt, ipsum massa maximus nibh, et tincidunt nunc nulla dapibus risus. Duis iaculis augue eu velit vulputate sollicitudin vitae nec magna. Fusce finibus nec mauris pretium accumsan. Ut vestibulum libero accumsan, pretium neque sed, volutpat nunc. In volutpat pulvinar varius. Nam sed lacus vel risus auctor auctor. Fusce semper porttitor leo eget tincidunt. Aenean et nunc in tortor convallis pharetra vel non odio. Cras semper elit non libero euismod, ut congue leo molestie. Praesent id dui semper, tempor nisi pulvinar, ornare mi. Donec euismod aliquet nisi, at dictum lectus tempor consectetur.`,
    });

    artigos.push({
      id: 'use-o-v0-da-vercel-para-criar-seu-front-end-react-em-segundos-com-a-ajuda-da-ia!',
      titulo:
        'Use o v0 da Vercel para criar seu front-end React em segundos com a ajuda da IA!',
      likes: 13,
      comentarios: 6,
      username: 'eduardoMats',
      horario: '20:03',
      data: '14/09/2024',
      texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, eros ut interdum euismod, augue diam commodo lectus, eget faucibus turpis nisl ut mi. Ut non placerat massa. Donec ullamcorper neque ut molestie pharetra. Pellentesque porta facilisis quam, et pulvinar elit luctus quis. Etiam tempor laoreet metus et blandit. Quisque vitae ex venenatis, pellentesque risus imperdiet, bibendum eros. Nulla orci leo, congue id neque vitae, cursus dapibus lorem. Proin semper nibh vel aliquam tempus. Sed ac diam placerat, ornare erat a, ornare diam. Aliquam ac ex neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean condimentum arcu sit amet volutpat laoreet. In hac habitasse platea dictumst. Proin mattis lorem quis arcu vulputate, non maximus massa ultrices.

      Proin tincidunt quam sit amet imperdiet viverra. Morbi nec tortor at ipsum imperdiet convallis sed eu velit. Vivamus malesuada elit tortor, at ornare velit maximus vel. Quisque non nulla luctus tellus sollicitudin pharetra vitae interdum risus. Nullam nec tristique felis. In a interdum massa. Donec sollicitudin mollis quam, et lacinia lacus ultricies at. Nam malesuada pellentesque risus et sollicitudin. Morbi auctor nisl dui, sed sagittis odio accumsan sed. Duis luctus massa sit amet sem maximus vulputate.

      Donec vitae porttitor dui, ut porttitor urna. Duis aliquet velit finibus tristique gravida. Curabitur sollicitudin neque et velit mollis, sit amet pellentesque sapien porta. Fusce eu velit tincidunt, finibus purus at, laoreet orci. Donec imperdiet, mi quis laoreet placerat, lectus massa sollicitudin dui, id fermentum quam sem sit amet dolor. Mauris tempor, sapien nec finibus tincidunt, ipsum massa maximus nibh, et tincidunt nunc nulla dapibus risus. Duis iaculis augue eu velit vulputate sollicitudin vitae nec magna. Fusce finibus nec mauris pretium accumsan. Ut vestibulum libero accumsan, pretium neque sed, volutpat nunc. In volutpat pulvinar varius. Nam sed lacus vel risus auctor auctor. Fusce semper porttitor leo eget tincidunt. Aenean et nunc in tortor convallis pharetra vel non odio. Cras semper elit non libero euismod, ut congue leo molestie. Praesent id dui semper, tempor nisi pulvinar, ornare mi. Donec euismod aliquet nisi, at dictum lectus tempor consectetur.`,
    });

    artigos.push({
      id: 'test-runners-e-frameworks-de-teste-em-javascript',
      titulo: 'Test runners e frameworks de teste em JavaScript',
      likes: 12,
      comentarios: 3,
      username: 'rafael',
      horario: '20:05',
      data: '14/09/2024',
      texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, eros ut interdum euismod, augue diam commodo lectus, eget faucibus turpis nisl ut mi. Ut non placerat massa. Donec ullamcorper neque ut molestie pharetra. Pellentesque porta facilisis quam, et pulvinar elit luctus quis. Etiam tempor laoreet metus et blandit. Quisque vitae ex venenatis, pellentesque risus imperdiet, bibendum eros. Nulla orci leo, congue id neque vitae, cursus dapibus lorem. Proin semper nibh vel aliquam tempus. Sed ac diam placerat, ornare erat a, ornare diam. Aliquam ac ex neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean condimentum arcu sit amet volutpat laoreet. In hac habitasse platea dictumst. Proin mattis lorem quis arcu vulputate, non maximus massa ultrices.

      Proin tincidunt quam sit amet imperdiet viverra. Morbi nec tortor at ipsum imperdiet convallis sed eu velit. Vivamus malesuada elit tortor, at ornare velit maximus vel. Quisque non nulla luctus tellus sollicitudin pharetra vitae interdum risus. Nullam nec tristique felis. In a interdum massa. Donec sollicitudin mollis quam, et lacinia lacus ultricies at. Nam malesuada pellentesque risus et sollicitudin. Morbi auctor nisl dui, sed sagittis odio accumsan sed. Duis luctus massa sit amet sem maximus vulputate.

      Donec vitae porttitor dui, ut porttitor urna. Duis aliquet velit finibus tristique gravida. Curabitur sollicitudin neque et velit mollis, sit amet pellentesque sapien porta. Fusce eu velit tincidunt, finibus purus at, laoreet orci. Donec imperdiet, mi quis laoreet placerat, lectus massa sollicitudin dui, id fermentum quam sem sit amet dolor. Mauris tempor, sapien nec finibus tincidunt, ipsum massa maximus nibh, et tincidunt nunc nulla dapibus risus. Duis iaculis augue eu velit vulputate sollicitudin vitae nec magna. Fusce finibus nec mauris pretium accumsan. Ut vestibulum libero accumsan, pretium neque sed, volutpat nunc. In volutpat pulvinar varius. Nam sed lacus vel risus auctor auctor. Fusce semper porttitor leo eget tincidunt. Aenean et nunc in tortor convallis pharetra vel non odio. Cras semper elit non libero euismod, ut congue leo molestie. Praesent id dui semper, tempor nisi pulvinar, ornare mi. Donec euismod aliquet nisi, at dictum lectus tempor consectetur.`,
    });

    artigos.push({
      id: 'fiz-um-bubblesort-em-assembly-mips-para-rodar-no-simulador-logisim',
      titulo:
        'Fiz um BubbleSort em assembly (MIPS) para rodar no simulador Logisim',
      likes: 12,
      comentarios: 6,
      username: 'koziel',
      horario: '20:03',
      data: '14/09/2024',
      texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, eros ut interdum euismod, augue diam commodo lectus, eget faucibus turpis nisl ut mi. Ut non placerat massa. Donec ullamcorper neque ut molestie pharetra. Pellentesque porta facilisis quam, et pulvinar elit luctus quis. Etiam tempor laoreet metus et blandit. Quisque vitae ex venenatis, pellentesque risus imperdiet, bibendum eros. Nulla orci leo, congue id neque vitae, cursus dapibus lorem. Proin semper nibh vel aliquam tempus. Sed ac diam placerat, ornare erat a, ornare diam. Aliquam ac ex neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean condimentum arcu sit amet volutpat laoreet. In hac habitasse platea dictumst. Proin mattis lorem quis arcu vulputate, non maximus massa ultrices.

      Proin tincidunt quam sit amet imperdiet viverra. Morbi nec tortor at ipsum imperdiet convallis sed eu velit. Vivamus malesuada elit tortor, at ornare velit maximus vel. Quisque non nulla luctus tellus sollicitudin pharetra vitae interdum risus. Nullam nec tristique felis. In a interdum massa. Donec sollicitudin mollis quam, et lacinia lacus ultricies at. Nam malesuada pellentesque risus et sollicitudin. Morbi auctor nisl dui, sed sagittis odio accumsan sed. Duis luctus massa sit amet sem maximus vulputate.

      Donec vitae porttitor dui, ut porttitor urna. Duis aliquet velit finibus tristique gravida. Curabitur sollicitudin neque et velit mollis, sit amet pellentesque sapien porta. Fusce eu velit tincidunt, finibus purus at, laoreet orci. Donec imperdiet, mi quis laoreet placerat, lectus massa sollicitudin dui, id fermentum quam sem sit amet dolor. Mauris tempor, sapien nec finibus tincidunt, ipsum massa maximus nibh, et tincidunt nunc nulla dapibus risus. Duis iaculis augue eu velit vulputate sollicitudin vitae nec magna. Fusce finibus nec mauris pretium accumsan. Ut vestibulum libero accumsan, pretium neque sed, volutpat nunc. In volutpat pulvinar varius. Nam sed lacus vel risus auctor auctor. Fusce semper porttitor leo eget tincidunt. Aenean et nunc in tortor convallis pharetra vel non odio. Cras semper elit non libero euismod, ut congue leo molestie. Praesent id dui semper, tempor nisi pulvinar, ornare mi. Donec euismod aliquet nisi, at dictum lectus tempor consectetur.`,
    });

    artigos.push({
      id: 'meu-problema-com-o-temas-dark',
      titulo: 'Meu problema com o temas dark',
      likes: 7,
      comentarios: 12,
      username: 'itsmatheusmoura',
      horario: '20:04',
      data: '14/09/2024',
      texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, eros ut interdum euismod, augue diam commodo lectus, eget faucibus turpis nisl ut mi. Ut non placerat massa. Donec ullamcorper neque ut molestie pharetra. Pellentesque porta facilisis quam, et pulvinar elit luctus quis. Etiam tempor laoreet metus et blandit. Quisque vitae ex venenatis, pellentesque risus imperdiet, bibendum eros. Nulla orci leo, congue id neque vitae, cursus dapibus lorem. Proin semper nibh vel aliquam tempus. Sed ac diam placerat, ornare erat a, ornare diam. Aliquam ac ex neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean condimentum arcu sit amet volutpat laoreet. In hac habitasse platea dictumst. Proin mattis lorem quis arcu vulputate, non maximus massa ultrices.

      Proin tincidunt quam sit amet imperdiet viverra. Morbi nec tortor at ipsum imperdiet convallis sed eu velit. Vivamus malesuada elit tortor, at ornare velit maximus vel. Quisque non nulla luctus tellus sollicitudin pharetra vitae interdum risus. Nullam nec tristique felis. In a interdum massa. Donec sollicitudin mollis quam, et lacinia lacus ultricies at. Nam malesuada pellentesque risus et sollicitudin. Morbi auctor nisl dui, sed sagittis odio accumsan sed. Duis luctus massa sit amet sem maximus vulputate.

      Donec vitae porttitor dui, ut porttitor urna. Duis aliquet velit finibus tristique gravida. Curabitur sollicitudin neque et velit mollis, sit amet pellentesque sapien porta. Fusce eu velit tincidunt, finibus purus at, laoreet orci. Donec imperdiet, mi quis laoreet placerat, lectus massa sollicitudin dui, id fermentum quam sem sit amet dolor. Mauris tempor, sapien nec finibus tincidunt, ipsum massa maximus nibh, et tincidunt nunc nulla dapibus risus. Duis iaculis augue eu velit vulputate sollicitudin vitae nec magna. Fusce finibus nec mauris pretium accumsan. Ut vestibulum libero accumsan, pretium neque sed, volutpat nunc. In volutpat pulvinar varius. Nam sed lacus vel risus auctor auctor. Fusce semper porttitor leo eget tincidunt. Aenean et nunc in tortor convallis pharetra vel non odio. Cras semper elit non libero euismod, ut congue leo molestie. Praesent id dui semper, tempor nisi pulvinar, ornare mi. Donec euismod aliquet nisi, at dictum lectus tempor consectetur.`,
    });

    artigos.push({
      id: 'o-vscode-ja-era',
      titulo: 'O VSCode Já era???',
      likes: 4,
      comentarios: 24,
      username: 'tocodando',
      horario: '20:07',
      data: '14/09/2024',
      texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, eros ut interdum euismod, augue diam commodo lectus, eget faucibus turpis nisl ut mi. Ut non placerat massa. Donec ullamcorper neque ut molestie pharetra. Pellentesque porta facilisis quam, et pulvinar elit luctus quis. Etiam tempor laoreet metus et blandit. Quisque vitae ex venenatis, pellentesque risus imperdiet, bibendum eros. Nulla orci leo, congue id neque vitae, cursus dapibus lorem. Proin semper nibh vel aliquam tempus. Sed ac diam placerat, ornare erat a, ornare diam. Aliquam ac ex neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean condimentum arcu sit amet volutpat laoreet. In hac habitasse platea dictumst. Proin mattis lorem quis arcu vulputate, non maximus massa ultrices.

      Proin tincidunt quam sit amet imperdiet viverra. Morbi nec tortor at ipsum imperdiet convallis sed eu velit. Vivamus malesuada elit tortor, at ornare velit maximus vel. Quisque non nulla luctus tellus sollicitudin pharetra vitae interdum risus. Nullam nec tristique felis. In a interdum massa. Donec sollicitudin mollis quam, et lacinia lacus ultricies at. Nam malesuada pellentesque risus et sollicitudin. Morbi auctor nisl dui, sed sagittis odio accumsan sed. Duis luctus massa sit amet sem maximus vulputate.

      Donec vitae porttitor dui, ut porttitor urna. Duis aliquet velit finibus tristique gravida. Curabitur sollicitudin neque et velit mollis, sit amet pellentesque sapien porta. Fusce eu velit tincidunt, finibus purus at, laoreet orci. Donec imperdiet, mi quis laoreet placerat, lectus massa sollicitudin dui, id fermentum quam sem sit amet dolor. Mauris tempor, sapien nec finibus tincidunt, ipsum massa maximus nibh, et tincidunt nunc nulla dapibus risus. Duis iaculis augue eu velit vulputate sollicitudin vitae nec magna. Fusce finibus nec mauris pretium accumsan. Ut vestibulum libero accumsan, pretium neque sed, volutpat nunc. In volutpat pulvinar varius. Nam sed lacus vel risus auctor auctor. Fusce semper porttitor leo eget tincidunt. Aenean et nunc in tortor convallis pharetra vel non odio. Cras semper elit non libero euismod, ut congue leo molestie. Praesent id dui semper, tempor nisi pulvinar, ornare mi. Donec euismod aliquet nisi, at dictum lectus tempor consectetur.`,
    });

    artigos.push({
      id: 'relato-umbler-dominio-registro-br-aws-lightsail-e-phpmailer',
      titulo: '[relato]Umbler, domínio registro.br, AWS LightSail e PHPMailer',
      likes: 10,
      comentarios: 0,
      username: 'Wellington79',
      horario: '20:03',
      data: '14/09/2024',
      texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, eros ut interdum euismod, augue diam commodo lectus, eget faucibus turpis nisl ut mi. Ut non placerat massa. Donec ullamcorper neque ut molestie pharetra. Pellentesque porta facilisis quam, et pulvinar elit luctus quis. Etiam tempor laoreet metus et blandit. Quisque vitae ex venenatis, pellentesque risus imperdiet, bibendum eros. Nulla orci leo, congue id neque vitae, cursus dapibus lorem. Proin semper nibh vel aliquam tempus. Sed ac diam placerat, ornare erat a, ornare diam. Aliquam ac ex neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean condimentum arcu sit amet volutpat laoreet. In hac habitasse platea dictumst. Proin mattis lorem quis arcu vulputate, non maximus massa ultrices.

      Proin tincidunt quam sit amet imperdiet viverra. Morbi nec tortor at ipsum imperdiet convallis sed eu velit. Vivamus malesuada elit tortor, at ornare velit maximus vel. Quisque non nulla luctus tellus sollicitudin pharetra vitae interdum risus. Nullam nec tristique felis. In a interdum massa. Donec sollicitudin mollis quam, et lacinia lacus ultricies at. Nam malesuada pellentesque risus et sollicitudin. Morbi auctor nisl dui, sed sagittis odio accumsan sed. Duis luctus massa sit amet sem maximus vulputate.

      Donec vitae porttitor dui, ut porttitor urna. Duis aliquet velit finibus tristique gravida. Curabitur sollicitudin neque et velit mollis, sit amet pellentesque sapien porta. Fusce eu velit tincidunt, finibus purus at, laoreet orci. Donec imperdiet, mi quis laoreet placerat, lectus massa sollicitudin dui, id fermentum quam sem sit amet dolor. Mauris tempor, sapien nec finibus tincidunt, ipsum massa maximus nibh, et tincidunt nunc nulla dapibus risus. Duis iaculis augue eu velit vulputate sollicitudin vitae nec magna. Fusce finibus nec mauris pretium accumsan. Ut vestibulum libero accumsan, pretium neque sed, volutpat nunc. In volutpat pulvinar varius. Nam sed lacus vel risus auctor auctor. Fusce semper porttitor leo eget tincidunt. Aenean et nunc in tortor convallis pharetra vel non odio. Cras semper elit non libero euismod, ut congue leo molestie. Praesent id dui semper, tempor nisi pulvinar, ornare mi. Donec euismod aliquet nisi, at dictum lectus tempor consectetur.`,
    });

    artigos.push({
      id: 'brasileiro-lider-do-projeto-rust-for-linux-anuncia-sua-saida',
      titulo: 'Brasileiro líder do projeto Rust for Linux anuncia sua saída',
      likes: 9,
      comentarios: 2,
      username: 'NewsletterOficial',
      horario: '20:05',
      data: '14/09/2024',
      texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, eros ut interdum euismod, augue diam commodo lectus, eget faucibus turpis nisl ut mi. Ut non placerat massa. Donec ullamcorper neque ut molestie pharetra. Pellentesque porta facilisis quam, et pulvinar elit luctus quis. Etiam tempor laoreet metus et blandit. Quisque vitae ex venenatis, pellentesque risus imperdiet, bibendum eros. Nulla orci leo, congue id neque vitae, cursus dapibus lorem. Proin semper nibh vel aliquam tempus. Sed ac diam placerat, ornare erat a, ornare diam. Aliquam ac ex neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean condimentum arcu sit amet volutpat laoreet. In hac habitasse platea dictumst. Proin mattis lorem quis arcu vulputate, non maximus massa ultrices.

      Proin tincidunt quam sit amet imperdiet viverra. Morbi nec tortor at ipsum imperdiet convallis sed eu velit. Vivamus malesuada elit tortor, at ornare velit maximus vel. Quisque non nulla luctus tellus sollicitudin pharetra vitae interdum risus. Nullam nec tristique felis. In a interdum massa. Donec sollicitudin mollis quam, et lacinia lacus ultricies at. Nam malesuada pellentesque risus et sollicitudin. Morbi auctor nisl dui, sed sagittis odio accumsan sed. Duis luctus massa sit amet sem maximus vulputate.

      Donec vitae porttitor dui, ut porttitor urna. Duis aliquet velit finibus tristique gravida. Curabitur sollicitudin neque et velit mollis, sit amet pellentesque sapien porta. Fusce eu velit tincidunt, finibus purus at, laoreet orci. Donec imperdiet, mi quis laoreet placerat, lectus massa sollicitudin dui, id fermentum quam sem sit amet dolor. Mauris tempor, sapien nec finibus tincidunt, ipsum massa maximus nibh, et tincidunt nunc nulla dapibus risus. Duis iaculis augue eu velit vulputate sollicitudin vitae nec magna. Fusce finibus nec mauris pretium accumsan. Ut vestibulum libero accumsan, pretium neque sed, volutpat nunc. In volutpat pulvinar varius. Nam sed lacus vel risus auctor auctor. Fusce semper porttitor leo eget tincidunt. Aenean et nunc in tortor convallis pharetra vel non odio. Cras semper elit non libero euismod, ut congue leo molestie. Praesent id dui semper, tempor nisi pulvinar, ornare mi. Donec euismod aliquet nisi, at dictum lectus tempor consectetur.`,
    });
    return of(new HttpResponse<Artigo[]>({ body: artigos }));
  }
}
