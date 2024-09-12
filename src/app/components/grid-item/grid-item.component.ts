import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrl: './grid-item.component.scss',
})
export class GridItemComponent {
  @Input() id?: number;
  @Input() titulo?: string;
  @Input() likes?: number;
  @Input() comentarios?: number;
  @Input() username?: string;
  @Input() horario?: string;

  constructor(private router: Router) {}

  goToPerfil(username: string) {
    this.router.navigate([`/${username}`]);
  }
}
