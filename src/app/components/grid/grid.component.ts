import { Component, Input, OnInit } from '@angular/core';
import { Artigo } from '../../models/artigo.model';
import { ArtigoService } from '../../services/artigo.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
})
export class GridComponent implements OnInit {
  @Input() username: string | undefined;

  artigos!: Artigo[];
  destroy$: Subject<unknown> = new Subject();

  constructor(private artigoService: ArtigoService) {}

  ngOnInit(): void {
    this.getArtigos();
  }

  getArtigos() {
    this.artigoService
      .getArtigos()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.artigos = response.body ?? [];
          if (this.username) {
            this.artigos = this.artigos.filter(
              (a) => a.username === this.username
            );
          }
        },
      });
  }
}
