import { Subject, takeUntil } from 'rxjs';
import { Artigo } from './../../../models/artigo.model';
import { ArtigoService } from './../../../services/artigo.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent implements OnInit {
  artigo!: Artigo;
  destroy$: Subject<unknown> = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private artigoService: ArtigoService
  ) {}

  ngOnInit() {
    this.getPost();
  }

  getPost() {
    const postId = this.activatedRoute.snapshot.params['id'];
    const user = this.activatedRoute.snapshot.parent?.params['id'];

    this.artigoService
      .getPostContent(user, postId)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.body) this.artigo = response.body;
        },
      });
  }

  getDiasAtras(data: string) {
    return data;
  }
}
