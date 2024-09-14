import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss',
})
export class PerfilComponent implements OnInit {
  username?: string;
  likes?: number;
  comentarios?: number;
  dias?: number;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.users = this.getUsers();

    this.setProfileInformations();
  }

  setProfileInformations() {
    const username = this.activatedRoute.snapshot.params['id'];
    const user = this.users.find((user) => user.username === username);
    if (user) {
      this.username = username;
      this.likes = user.likes;
      this.comentarios = user.comentarios;
      this.dias = user.dias;
    } else {
      this.router.navigate(['/undefined']);
    }
  }

  // Ambiente de Teste
  users: User[] = [];

  getUsers(): User[] {
    const users: User[] = [
      {
        username: 'momo',
        likes: 898,
        comentarios: 271,
        dias: 27,
      },
      {
        username: 'jonasAquino39',
        likes: 8,
        comentarios: 17,
        dias: 20,
      },
      {
        username: 'jonasAquino39',
        likes: 18,
        comentarios: 23,
        dias: 22,
      },
      {
        username: 'guilhermeazevedo79',
        likes: 177,
        comentarios: 101,
        dias: 20,
      },
      {
        username: 'leonardo77',
        likes: 78,
        comentarios: 10,
        dias: 33,
      },
      {
        username: 'ArthurZin',
        likes: 17,
        comentarios: 4,
        dias: 1,
      },
      {
        username: 'filipeleonelbatista',
        likes: 16,
        comentarios: 0,
        dias: 6,
      },
      {
        username: 'kht',
        likes: 11,
        comentarios: 1,
        dias: 5,
      },
      {
        username: 'lemuelroberto',
        likes: 7,
        comentarios: 0,
        dias: 2014,
      },
      {
        username: 'maycony',
        likes: 3,
        comentarios: 11,
        dias: 1,
      },
      {
        username: 'ZambeliDev',
        likes: 5,
        comentarios: 1,
        dias: 7,
      },
      {
        username: 'ojonatasquirino',
        likes: 4,
        comentarios: 1,
        dias: 3,
      },
      {
        username: 'Sabalozua18',
        likes: 4,
        comentarios: 1,
        dias: 6,
      },
      {
        username: 'Anderson',
        likes: 4,
        comentarios: 0,
        dias: 6,
      },
      {
        username: 'luishjacinto',
        likes: 3,
        comentarios: 0,
        dias: 9,
      },
      {
        username: 'Vradimmir',
        likes: 2,
        comentarios: 1,
        dias: 2,
      },
      {
        username: 'gabrielduete',
        likes: 4,
        comentarios: 3,
        dias: 3,
      },
      {
        username: 'gabrielduete',
        likes: 4,
        comentarios: 0,
        dias: 3,
      },
      {
        username: 'andreeliasdev',
        likes: 66,
        comentarios: 18,
        dias: 4,
      },
      {
        username: '0xtny',
        likes: 46,
        comentarios: 1,
        dias: 7,
      },
      {
        username: 'saraiva',
        likes: 27,
        comentarios: 24,
        dias: 6,
      },
      {
        username: 'JeielLimaMiranda',
        likes: 26,
        comentarios: 8,
        dias: 5,
      },
      {
        username: 'santigonzaga',
        likes: 18,
        comentarios: 9,
        dias: 5,
      },
      {
        username: 'umProgramadorCansado',
        likes: 14,
        comentarios: 9,
        dias: 4,
      },
      {
        username: 'hermogenes',
        likes: 14,
        comentarios: 11,
        dias: 5,
      },
      {
        username: 'eduardoMats',
        likes: 13,
        comentarios: 6,
        dias: 3,
      },
      {
        username: 'rafael',
        likes: 12,
        comentarios: 3,
        dias: 5,
      },
      {
        username: 'koziel',
        likes: 12,
        comentarios: 6,
        dias: 3,
      },
      {
        username: 'itsmatheusmoura',
        likes: 7,
        comentarios: 12,
        dias: 4,
      },
      {
        username: 'tocodando',
        likes: 4,
        comentarios: 24,
        dias: 7,
      },
      {
        username: 'Wellington79',
        likes: 10,
        comentarios: 0,
        dias: 3,
      },
      {
        username: 'NewsletterOficial',
        likes: 9,
        comentarios: 2,
        dias: 5,
      },
    ];

    return users;
  }
}
